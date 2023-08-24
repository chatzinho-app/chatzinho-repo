export const envConfig = {
  NODE_ENV: process.env?.NODE_ENV ?? 'development',
  apiPort: Number(process.env?.API_PORT ?? 4000),
  dbHost: process.env?.DB_HOST ?? 'database',
  dbPort: Number(process.env?.DB_PORT ?? 5432),
  dbHostPort: Number(process.env?.DB_HOST_PORT ?? 5434),
  dbUsername: process.env?.DB_USERNAME,
  dbPassword: process.env?.DB_PASSWORD,
  dbName: process.env?.DB_NAME ?? 'test_licitar_db',
  typeormLogging: process.env?.TYPEORM_LOGGING === 'true',
  typeormSynchronize: process.env?.TYPEORM_SYNCHRONIZE === 'true',
  jwtSecret: process.env?.JWT_SECRET,
}
