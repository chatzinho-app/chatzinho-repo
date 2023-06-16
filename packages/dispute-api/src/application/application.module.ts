import { forwardRef, Module } from '@nestjs/common'

import { DomainModule } from '@domain/domain.module'

import { AuthV1Api } from './api/auth/auth.v1.api'
import { UserV1Api } from './api/user/user.v1.api'
import { UserRepository } from './repository/user.repository'
import { UserService } from './services/user.service'

@Module({
  imports: [forwardRef(() => DomainModule)],
  controllers: [AuthV1Api, UserV1Api],
  providers: [UserService, UserRepository],
  exports: [UserService, UserRepository],
})
export class ApplicationModule {}
