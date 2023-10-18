import envs from '@common/constants/envs'
import { getStorage } from '@common/utils/storage'
import { paths } from '@generated/types'
import createClient from 'openapi-fetch'

const baseUrl =
  'https://423d-2804-18-173-61fa-1ddb-6abb-ea9b-f1d0.ngrok-free.app'
const token = getStorage(envs.TOKEN_ALIAS)

export const publicApi = createClient<paths>({
  baseUrl,
  cache: 'no-store',
})

export const api = createClient<paths>({
  baseUrl,
  cache: 'no-store',
  headers: {
    Authorization: 'Bearer ' + token,
  },
})
