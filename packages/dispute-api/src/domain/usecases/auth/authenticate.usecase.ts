import { Inject, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { UserService } from '@application/services/user.service'
import { PasswordValidator } from '@domain/validators/password.validator'

@Injectable()
export default class AuthenticateUseCase {
  constructor(
    @Inject(UserService)
    private userService: UserService,
    private jwtService: JwtService,
    private passwordValidator: PasswordValidator,
  ) {}

  async execute(email: string, password: string): Promise<{ token: string }> {
    const foundUser = await this.userService.findOneBy({ email })

    this.passwordValidator.validate(password, foundUser)

    const token = await this.jwtService.signAsync({
      id: foundUser.id,
      name: foundUser.name,
    })

    return { token }
  }
}
