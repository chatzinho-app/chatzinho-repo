import { Inject, Injectable } from '@nestjs/common'

import { UserService } from '@application/services/user.service'
import { CatchError } from '@core/decorators/catch-error.decorator'
import { UserStatusEnum } from '@domain/enums'
import {
  EmailValidator,
  PasswordValidator,
  UserValidator,
} from '@domain/validators'

import { RegisterUserInputDto } from './dto/register-user.input'

@Injectable()
export class RegisterUserUseCase {
  constructor(
    @Inject(UserService)
    private userService: UserService,
    private passwordValidator: PasswordValidator,
    private emailValidator: EmailValidator,
    private userValidator: UserValidator,
  ) {}

  @CatchError()
  async execute(input: RegisterUserInputDto): Promise<boolean> {
    const { cpf, email, password } = input

    this.passwordValidator.validate(password)
    this.emailValidator.validate(email)
    this.userValidator.exists(input)

    const updatedUser = await this.userService.update(
      { cpf },
      {
        email,
        password,
        status: UserStatusEnum.ACTIVE,
      },
    )

    return !!updatedUser?.id
  }
}
