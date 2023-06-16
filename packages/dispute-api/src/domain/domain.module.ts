import { forwardRef, Module } from '@nestjs/common'

import { ApplicationModule } from '@application/application.module'
import { AuthModule } from '@infra/http/auth/auth.module'

@Module({
  imports: [forwardRef(() => AuthModule), forwardRef(() => ApplicationModule)],
})
export class DomainModule {}
