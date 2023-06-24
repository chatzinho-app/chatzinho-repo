import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ormConfig } from '@core/config/orm.config'

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig.options)],
  providers: [],
})
export class DatabaseModule {}
