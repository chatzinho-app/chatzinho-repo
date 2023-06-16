import { DataSource } from 'typeorm'

export const ormconfig = new DataSource({
  migrationsTableName: 'migrations',
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT || 5434,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging:
    Boolean(process.env?.TYPEORM_LOGGING?.toLowerCase() === 'true') || false,
  synchronize:
    Boolean(process.env?.TYPEORM_SYNCHRONIZE?.toLowerCase() === 'true') ||
    false,
  entities: ['dist/**/**.entity.js'],
  // migrations: ['dist/migrations/**/*.js'],
  // subscribers: ['dist/subscriber/**/*.js'],
})
