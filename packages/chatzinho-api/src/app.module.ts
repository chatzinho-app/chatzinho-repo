import { Module } from '@nestjs/common'

import { ApplicationModule } from '@application/application.module'
import { InfraModule } from '@infra/infra.module'

import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [InfraModule, ApplicationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
