import { Inject, Injectable } from '@nestjs/common'

import { UserService } from '@application/services/user.service'
import { Exceptions } from '@core/constants/exceptions.constant'
import { CatchError } from '@core/decorators/catch-error.decorator'
import { User } from '@domain/entities'
import { UserStatusEnum } from '@domain/enums'
import { PasswordValidator } from '@domain/validators'

import { RegisterUserInputDto } from './dto/create-user.input'

@Injectable()
export class RegisterUserUseCase {
  constructor(
    @Inject(UserService)
    private userService: UserService,
    private passwordValidator: PasswordValidator,
  ) {}

  @CatchError()
  async execute(input: RegisterUserInputDto): Promise<User> {
    const { cpf, email, name, password } = input

    const foundEmail = await this.userService.findOneBy({ email })

    if (foundEmail?.id) {
      throw Exceptions.EMAIL_ALREADY_EXISTS
    }

    this.passwordValidator.validate(password)

    const createdUser = await this.userService.save({
      cpf,
      email,
      name,
      password,
      status: UserStatusEnum.INACTIVE,
    })

    return createdUser
  }
}
