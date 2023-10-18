import { getCookie } from '@common/utils/storage'
import { paths } from '@generated/types'
import createClient from 'openapi-fetch'

import envs from './envs'

const baseUrl = envs.BASE_URL
const token = getCookie(envs.TOKEN_ALIAS)

export const publicApi = createClient<paths>({
  baseUrl,
  cache: 'no-store',
  // // mode: 'no-cors',
  // cache: 'no-cache',
  // credentials: 'same-origin',
  // headers: {
  //   'Content-Type': 'application/json',
  // },
  // referrerPolicy: 'no-referrer',
})

export const api = createClient<paths>({
  baseUrl,
  cache: 'no-store',
  headers: {
    Authorization: 'Bearer ' + token,
  },
  // // mode: 'no-cors',
  // cache: 'no-cache',
  // credentials: 'same-origin',
  // headers: {
  //   'Content-Type': 'application/json',
  // },
  // referrerPolicy: 'no-referrer',
})
