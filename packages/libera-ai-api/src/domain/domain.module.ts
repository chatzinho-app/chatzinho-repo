import { forwardRef, Module } from '@nestjs/common'

import { ApplicationModule } from '@application/application.module'
import { AuthModule } from '@infra/http/auth/auth.module'
import { GetAllAuditsUseCase, GetAuditStatisticsUseCase } from '@usecases/audit'
import {
  AuthenticateUseCase,
  RegisterUserUseCase,
  VerifyIndentifierUseCase,
} from '@usecases/auth'
import {
  CreateBySuperAdminUsecase,
  GetAllUsersUseCase,
  GetOneUserUseCase,
  GetStatisticsUseCase,
  UpdateBySuperAdminUseCase,
} from '@usecases/user'
import { DeleteOneUserUseCase } from '@usecases/user/delete-one-user.usecase'

import {
  ActivateUserValidator,
  CpfValidator,
  EmailValidator,
  PasswordValidator,
  UserValidator,
} from './validators'

const useCases = [
  GetAllAuditsUseCase,
  GetAuditStatisticsUseCase,
  AuthenticateUseCase,
  RegisterUserUseCase,
  VerifyIndentifierUseCase,
  GetAllUsersUseCase,
  GetOneUserUseCase,
  GetStatisticsUseCase,
  DeleteOneUserUseCase,
  CreateBySuperAdminUsecase,
  UpdateBySuperAdminUseCase,
]
const validators = [
  ActivateUserValidator,
  EmailValidator,
  CpfValidator,
  PasswordValidator,
  UserValidator,
]

@Module({
  imports: [forwardRef(() => AuthModule), forwardRef(() => ApplicationModule)],
  providers: [...useCases, ...validators],
  exports: [...useCases],
})
export class DomainModule {}
