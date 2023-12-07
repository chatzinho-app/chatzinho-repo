import { forwardRef, Module } from '@nestjs/common'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { MongooseModule } from '@nestjs/mongoose'

import { AuditInterceptor } from '@core/interceptors/audit.interceptor'
import { DomainModule } from '@domain/domain.module'
import { Audit, AuditSchema } from '@domain/schemas/audit.schema'

import { AuditV1Api } from './api/audit/audit.v1.api'
import { AuthV1Api } from './api/auth/auth.v1.api'
import { UserV1Api } from './api/user/user.v1.api'
import { RoleRepository, UserRepository } from './repository'
import { AuditService, RoleService, UserService } from './services'

const repositories = [UserRepository, RoleRepository]
const services = [AuditService, UserService, RoleService]

@Module({
  imports: [
    forwardRef(() => DomainModule),
    MongooseModule.forFeature([{ name: Audit.name, schema: AuditSchema }]),
  ],
  controllers: [AuditV1Api, AuthV1Api, UserV1Api],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: AuditInterceptor,
    },
    ...services,
    ...repositories,
  ],
  exports: [...services, ...repositories],
})
export class ApplicationModule {}
