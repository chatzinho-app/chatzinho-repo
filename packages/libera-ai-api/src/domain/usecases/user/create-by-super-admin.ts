import { Inject, Injectable } from '@nestjs/common'

import { RoleService } from '@application/services/role.service'
import { UserService } from '@application/services/user.service'
import { Exceptions } from '@core/constants'
import { CatchError } from '@core/decorators'
import { User } from '@domain/entities/user.entity'
import { UserStatusEnum } from '@domain/enums'
import { CpfValidator, EmailValidator, UserValidator } from '@domain/validators'

import { CreateUserInputDto } from './dto/create-user.input'

@Injectable()
export class CreateBySuperAdminUsecase {
  constructor(
    @Inject(UserService)
    private userService: UserService,
    @Inject(RoleService)
    private roleService: RoleService,
    private cpfValidator: CpfValidator,
    private emailValidator: EmailValidator,
    private userValidator: UserValidator,
  ) {}

  @CatchError()
  async execute(dtoUser: CreateUserInputDto): Promise<User> {
    const foundRole = await this.roleService.findOneBy({ name: dtoUser.role })

    if (!foundRole) {
      throw Exceptions.USER_NOT_FOUND
    }

    await this.cpfValidator.validate(dtoUser.cpf)
    await this.emailValidator.validate(dtoUser.email)

    const user: User = {
      cpf: dtoUser.cpf,
      name: dtoUser.name,
      email: dtoUser.email,
      birthdate: dtoUser.birthdate,
      password: dtoUser.password ?? 'liberaai2023',
      status: dtoUser.status ?? UserStatusEnum.INACTIVE,
      roles: [foundRole],
    }

    return await this.userService.save(user)
  }
}
