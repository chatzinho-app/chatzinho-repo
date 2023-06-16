declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_PORT: string
      DB_HOST: string
      DB_PORT: string
      DB_USERNAME: string
      DB_PASSWORD: string
      DB_NAME: string
      JWT_SECRET: string
      TYPEORM_LOGGING?: 'true' | 'false'
      TYPEORM_SYNCHRONIZE?: 'true' | 'false'
      NODE_ENV: 'development' | 'production' | 'test'
    }
  }
}

export {}
