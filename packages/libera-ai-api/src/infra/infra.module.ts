import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { DatabaseModule } from './database/database.module'
import { HttpModule } from './http/http.module'

@Module({
  imports: [DatabaseModule, HttpModule, ConfigModule.forRoot()],
  providers: [],
  exports: [],
})
export class InfraModule {}
