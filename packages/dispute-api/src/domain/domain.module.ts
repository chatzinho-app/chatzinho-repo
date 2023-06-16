import { forwardRef, Module } from '@nestjs/common'

import { ApplicationModule } from '@application/application.module'
import { AuthModule } from '@infra/http/auth/auth.module'
import { AuthenticateUseCase, RegisterUserUseCase } from '@usecases/auth'
import { GetAllUsersUseCase } from '@usecases/user'

import { PasswordValidator } from './validators/password.validator'

const useCases = [AuthenticateUseCase, RegisterUserUseCase, GetAllUsersUseCase]
const validators = [PasswordValidator]

@Module({
  imports: [forwardRef(() => AuthModule), forwardRef(() => ApplicationModule)],
  providers: [...useCases, ...validators],
  exports: [...useCases],
})
export class DomainModule {}
