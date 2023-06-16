import { Controller, Post } from '@nestjs/common'

import { AuthenticateUseCase } from '@usecases/auth'

import LoginV1Input from './dto/login.v1.input'
import LoginV1Output from './dto/login.v1.output'

@Controller({ path: 'auth', version: '1' })
export class AuthV1Api {
  constructor(private readonly authenticateUseCase: AuthenticateUseCase) {}

  @Post('/login')
  async login(input: LoginV1Input): Promise<LoginV1Output> {
    return await this.authenticateUseCase.execute(input.email, input.password)
  }

  // @Post('/register')
  // async register(input: LoginV1Input): Promise<LoginV1Output> {
  //   return await this.authenticateUseCase.execute(input.email, input.password)
  // }
}
