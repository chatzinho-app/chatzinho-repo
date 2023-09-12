import { forwardRef, Module } from '@nestjs/common'

import { ApplicationModule } from '@application/application.module'
import { AuthModule } from '@infra/http/auth/auth.module'
import {
  AuthenticateUseCase,
  RegisterUserUseCase,
  VerifyIndentifierUseCase,
} from '@usecases/auth'
import { GetAllUsersUseCase } from '@usecases/user'

import {
  ActivateUserValidator,
  EmailValidator,
  PasswordValidator,
  UserValidator,
} from './validators'

const useCases = [
  AuthenticateUseCase,
  RegisterUserUseCase,
  VerifyIndentifierUseCase,
  GetAllUsersUseCase,
]
const validators = [
  ActivateUserValidator,
  EmailValidator,
  PasswordValidator,
  UserValidator,
]

@Module({
  imports: [forwardRef(() => AuthModule), forwardRef(() => ApplicationModule)],
  providers: [...useCases, ...validators],
  exports: [...useCases],
})
export class DomainModule {}
