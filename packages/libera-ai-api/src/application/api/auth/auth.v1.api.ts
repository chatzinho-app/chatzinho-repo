import { Body, Controller, Get, Post } from '@nestjs/common'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'

import { GetAuthenticatedUser, Roles } from '@core/decorators'
import { OmitAudit } from '@core/decorators/omit-audit.decorator'
import { User } from '@domain/entities'
import {
  AuthenticateUseCase,
  RegisterUserUseCase,
  VerifyIndentifierUseCase,
} from '@usecases/auth'

import { UserMapper } from '../user/dto'
import {
  LoginV1Input,
  LoginV1Output,
  MeV1Output,
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
    description: 'Get user authenticated using token',
    tags: ['auth'],
  })
  @Get('/me')
  @OmitAudit()
  @Roles('ANY')
  @ApiOkResponse({ type: MeV1Output })
  async me(@GetAuthenticatedUser() user: User): Promise<MeV1Output> {
    return UserMapper.toDto(user)
  }

  @ApiOperation({
    description: 'Generates a token based on email and password',
    tags: ['auth'],
  })
  @Post('/login')
  @OmitAudit()
  @ApiOkResponse({ type: LoginV1Output })
  async login(@Body() body: LoginV1Input): Promise<LoginV1Output> {
    return await this.authenticateUseCase.execute({ ...body, onlyAdmin: true })
  }

  @ApiOperation({
    description: 'Generates a token based on email and password',
    tags: ['auth'],
  })
  @Post('/login-app')
  @OmitAudit()
  @ApiOkResponse({ type: LoginV1Output })
  async loginInApp(@Body() body: LoginV1Input): Promise<LoginV1Output> {
    return await this.authenticateUseCase.execute(body)
  }

  @ApiOperation({
    description: 'Verify indentifier',
    tags: ['auth'],
  })
  @Post('/verify')
  @OmitAudit()
  @ApiOkResponse({ type: VerifyV1Output })
  async verifyUser(@Body() body: VerifyV1Input): Promise<VerifyV1Output> {
    const user = await this.verifyIdentifierUseCase.execute(body)

    return UserMapper.toDto(user)
  }

  @ApiOperation({
    description: 'Register the user',
    tags: ['auth'],
  })
  @Post('/register')
  @OmitAudit()
  @ApiOkResponse({ type: RegisterV1Output })
  async register(@Body() body: RegisterV1Input): Promise<RegisterV1Output> {
    const userIsRegistred = await this.registerUserUseCase.execute(body)

    if (userIsRegistred) return { status: 'success' }

    return {
      status: 'error',
    }
  }
}
