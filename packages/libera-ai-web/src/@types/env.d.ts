declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_BASE_URL?: string
      NEXT_PUBLIC_COOKIES_PREFIX?: string
      NEXT_PUBLIC_TOKEN_ALIAS?: string
      NODE_ENV: 'development' | 'production' | 'test'
    }
  }
}

export {}
