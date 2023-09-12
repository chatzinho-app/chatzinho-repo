import { Body, Controller, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

import {
  AuthenticateUseCase,
  RegisterUserUseCase,
  VerifyIndentifierUseCase,
} from '@usecases/auth'

import { UserMapper } from '../user/dto'
import {
  LoginV1Input,
  LoginV1Output,
  RegisterV1Input,
  RegisterV1Output,
  VerifyV1Input,
  VerifyV1Output,
} from './dto'

@ApiTags('Auth')
@Controller({ path: 'auth', version: '1' })
export class AuthV1Api {
  constructor(
    private readonly authenticateUseCase: AuthenticateUseCase,
    private readonly registerUserUseCase: RegisterUserUseCase,
    private readonly verifyIdentifierUseCase: VerifyIndentifierUseCase,
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
    description: 'Verify indentifier',
    tags: ['auth'],
  })
  @Post('/verify')
  async verifyUser(@Body() body: VerifyV1Input): Promise<VerifyV1Output> {
    const user = await this.verifyIdentifierUseCase.execute(body)

    return UserMapper.toDto(user)
  }

  @ApiOperation({
    description: 'Register the user',
    tags: ['auth'],
  })
  @Post('/register')
  async register(@Body() body: RegisterV1Input): Promise<RegisterV1Output> {
    const userIsRegistred = await this.registerUserUseCase.execute(body)

    if (userIsRegistred) return { status: 'success' }

    return {
      status: 'error',
    }
  }
}
