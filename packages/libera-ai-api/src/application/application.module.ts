import { forwardRef, Module } from '@nestjs/common'

import { DomainModule } from '@domain/domain.module'

import { AuthV1Api } from './api/auth/auth.v1.api'
import { UserV1Api } from './api/user/user.v1.api'
import { RoleRepository, UserRepository } from './repository'
import { RoleService, UserService } from './services'

const repositories = [UserRepository, RoleRepository]
const services = [UserService, RoleService]

@Module({
  imports: [forwardRef(() => DomainModule)],
  controllers: [AuthV1Api, UserV1Api],
  providers: [...services, ...repositories],
  exports: [...services, ...repositories],
})
export class ApplicationModule {}
