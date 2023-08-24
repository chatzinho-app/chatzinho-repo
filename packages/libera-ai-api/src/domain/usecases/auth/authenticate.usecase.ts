import { Inject, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { UserService } from '@application/services/user.service'
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

  async execute(input: AuthenticateUserDto): Promise<{ token: string }> {
    const { email, password } = input

    const foundUser = await this.userService.findOneBy({ email })

    this.passwordValidator.validate(password, foundUser)

    const token = await this.jwtService.signAsync({
      id: foundUser.id,
      name: foundUser.name,
    })

    return { token }
  }
}
