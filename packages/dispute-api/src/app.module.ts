import { Module } from '@nestjs/common'

import { ApplicationModule } from '@application/application.module'
import { InfraModule } from '@infra/infra.module'

@Module({
  imports: [InfraModule, ApplicationModule],
})
export class AppModule {}
