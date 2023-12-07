import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ormConfig } from '@core/config/orm.config'

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig.options),
    MongooseModule.forRoot(process.env.MONGO_URI, {
      retryAttempts: 1,
      dbName: process.env.MONGO_DB_NAME,
      auth: {
        username: process.env.MONGO_DB_USERNAME,
        password: process.env.MONGO_DB_PASSWORD,
      },
    }),
  ],
  providers: [],
})
export class DatabaseModule {}
