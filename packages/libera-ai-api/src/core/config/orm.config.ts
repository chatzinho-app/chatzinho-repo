import { DataSource } from 'typeorm'

import { envConfig } from './env.config'

export const ormConfig = new DataSource({
  migrationsTableName: 'migrations',
  type: 'postgres',
  host: envConfig.dbHost,
  port: envConfig.dbPort,
  username: envConfig.dbUsername,
  password: envConfig.dbPassword,
  database: envConfig.dbName,
  logging: envConfig.typeormLogging,
  synchronize: envConfig.typeormSynchronize,
  entities: ['dist/**/**.entity.js'],
  migrations: ['dist/**/migrations/**/*.js'],
  subscribers: ['dist/**/subscriber/**/*.js'],
})
