import { Inject, Injectable } from '@nestjs/common'

import { UserService } from '@application/services/user.service'
import { User } from '@domain/entities'
import { UserStatusEnum } from '@domain/enums'

import { RegisterUserInputDto } from './dto/create-user.input'

@Injectable()
export class RegisterUserUseCase {
  constructor(
    @Inject(UserService)
    private userService: UserService,
  ) {}

  async execute(input: RegisterUserInputDto): Promise<User> {
    const { cpf, email, name, password } = input

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
