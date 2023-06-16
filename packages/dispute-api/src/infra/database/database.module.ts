import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ormconfig } from '@core/config/ormconfig'

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig.options)],
  providers: [],
})
export class DatabaseModule {}
