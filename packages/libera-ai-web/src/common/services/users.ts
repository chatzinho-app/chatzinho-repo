import { api } from '@common/config/api'
import { Paginated } from '@common/interfaces/paginated'
import { components as ApiTypes } from '@generated/types'

export async function fetchPaginatedUsers(
  limit: Partial<Paginated>['limit'] = 10,
  offset: Partial<Paginated>['offset'] = 0,
  search?: Partial<Paginated>['search'],
) {
  return api.GET('/v1/users', {
    params: { query: { limit, offset, search } },
  })
}

export async function fetchUser(id: string) {
  return await api.GET('/v1/users/{id}', { params: { path: { id } } })
}

export async function updateUser(
  body: ApiTypes['schemas']['UpdateUserV1InputDto'],
) {
  return await api.PUT('/v1/users', { body })
}

export async function createUser(
  body: ApiTypes['schemas']['CreateUserV1InputDto'],
) {
  return await api.POST('/v1/users', { body })
}

export async function deleteUser(
  body: ApiTypes['schemas']['DeleteOneUserV1InputDto'],
) {
  return await api.DELETE('/v1/users/{id}', { body })
}
