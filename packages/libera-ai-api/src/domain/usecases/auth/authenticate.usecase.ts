import { Inject, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { UserService } from '@application/services/user.service'
import { Exceptions } from '@core/constants/exceptions.constant'
import { CatchError } from '@core/decorators/catch-error.decorator'
import { includesRole } from '@core/utils/roles.utils'
import { RolesEnum, UserStatusEnum } from '@domain/enums'
import { PasswordValidator } from '@domain/validators/password.validator'

import { AuthenticateUserDto } from './dto/authenticate-user.input'

@Injectable()
export class AuthenticateUseCase {
  constructor(
    @Inject(UserService)
    private userService: UserService,
    private jwtService: JwtService,
    private passwordValidator: PasswordValidator,
  ) {}

  @CatchError()
  async execute(input: AuthenticateUserDto): Promise<{ token: string }> {
    const { email, password } = input

    const foundUser = await this.userService.findOne({
      where: { email },
      relations: ['roles'],
    })

    if (!foundUser?.id) {
      throw Exceptions.EMAIL_OR_PASSWORD_INVALID
    }

    if (foundUser?.status !== UserStatusEnum.ACTIVE) {
      throw Exceptions.USER_NOT_ACTIVATED
    }

    if (
      input?.onlyAdmin &&
      !includesRole(foundUser.roles, [
        RolesEnum.ADMIN,
        RolesEnum.SUPER_ADMIN,
        RolesEnum.MANAGER,
      ])
    ) {
      throw Exceptions.UNAUTHORIZED_LOGIN
    }

    const validPassword = await this.passwordValidator.compare(
      password,
      foundUser,
    )

    if (validPassword) {
      const token = await this.jwtService.signAsync({
        id: foundUser.id,
        name: foundUser.name,
      })

      return { token }
    }
  }
}
