import { Body, Controller, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

import { AuthenticateUseCase } from '@usecases/auth'

import { LoginV1Input, LoginV1Output } from './dto'

@ApiTags('Auth')
@Controller({ path: 'auth', version: '1' })
export class AuthV1Api {
  constructor(private readonly authenticateUseCase: AuthenticateUseCase) {}

  @ApiOperation({
    description: 'Generates a token based on email and password',
    tags: ['auth'],
  })
  @Post('/login')
  async login(@Body() body: LoginV1Input): Promise<LoginV1Output> {
    return await this.authenticateUseCase.execute(body)
  }

    return await this.authenticateUseCase.execute(input.email, input.password)
  }

  // @Post('/register')
  // async register(input: LoginV1Input): Promise<LoginV1Output> {
  //   return await this.authenticateUseCase.execute(input.email, input.password)
  // }
}
