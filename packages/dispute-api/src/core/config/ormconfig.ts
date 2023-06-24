import { join } from 'path'
import { DataSource } from 'typeorm'

import { envs } from './env.config'

export const ormconfig = new DataSource({
  migrationsTableName: 'migrations',
  type: 'postgres',
  host: envs.dbHost,
  port: envs.dbPort,
  username: envs.dbUsername,
  password: envs.dbPassword,
  database: envs.dbName,
  logging: envs.typeormLogging,
  synchronize: envs.typeormSynchronize,
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  // migrations: ['dist/migrations/**/*.js'],
  // subscribers: ['dist/subscriber/**/*.js'],
})
