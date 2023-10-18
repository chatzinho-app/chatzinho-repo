const envs = {
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:4000/',
  COOKIES_PREFIX: process.env.NEXT_PUBLIC_COOKIES_PREFIX ?? 'libera-ai-web',
  TOKEN_ALIAS: process.env.NEXT_PUBLIC_TOKEN_ALIAS ?? 'token',
}

export default envs
