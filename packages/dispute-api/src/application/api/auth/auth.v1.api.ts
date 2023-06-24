import { Body, Controller, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

import { AuthenticateUseCase, RegisterUserUseCase } from '@usecases/auth'

import { UserMapper } from '../user/dto'
import {
  LoginV1Input,
  LoginV1Output,
  RegisterV1Input,
  RegisterV1Output,
} from './dto'

@ApiTags('Auth')
@Controller({ path: 'auth', version: '1' })
export class AuthV1Api {
  constructor(
    private readonly authenticateUseCase: AuthenticateUseCase,
    private readonly registerUserUseCase: RegisterUserUseCase,
  ) {}

  @ApiOperation({
    description: 'Generates a token based on email and password',
    tags: ['auth'],
  })
  @Post('/login')
  async login(@Body() body: LoginV1Input): Promise<LoginV1Output> {
    return await this.authenticateUseCase.execute(body)
  }

  @ApiOperation({
    description: 'Register the user',
    tags: ['auth'],
  })
  @Post('/register')
  async register(@Body() body: RegisterV1Input): Promise<RegisterV1Output> {
    const user = await this.registerUserUseCase.execute(body)

    return UserMapper.toDto(user)
  }
}
