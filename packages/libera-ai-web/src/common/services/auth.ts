import { publicApi } from '@common/config/api'
import envs from '@common/config/envs'
import { removeCookie } from '@common/utils/storage'
import { components as ApiTypes } from '@generated/types'

export async function fetchLogin(body: ApiTypes['schemas']['LoginV1Input']) {
  return await publicApi.POST('/v1/auth/login', {
    body,
  })
}

export function logout() {
  removeCookie(envs.TOKEN_ALIAS)
  removeCookie('user')
}
