import { publicApi } from '@common/config/api'
import envs from '@common/constants/envs'
import { getStorage, removeCookie } from '@common/utils/storage'
import { components as ApiTypes } from '@generated/types'

export async function fetchMe() {
  const token = await getStorage(envs.TOKEN_ALIAS)

  return await publicApi.GET('/v1/auth/me', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
}

export async function fetchLogin(body: ApiTypes['schemas']['LoginV1Input']) {
  return await publicApi.POST('/v1/auth/login-app', {
    body,
  })
}

export async function verifyIdentifier(
  body: ApiTypes['schemas']['VerifyV1Input'],
) {
  return await publicApi.POST('/v1/auth/verify', {
    body,
  })
}

export async function registerPassword(
  body: ApiTypes['schemas']['RegisterV1Input'],
) {
  return await publicApi.POST('/v1/auth/register', { body })
}

export function logout() {
  removeCookie(envs.TOKEN_ALIAS)
  removeCookie('user')
}
