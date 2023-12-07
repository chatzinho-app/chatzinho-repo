import { api } from '@common/config/api'
import { Paginated } from '@common/interfaces/paginated'

export async function fetchPaginatedAudits(
  limit: Partial<Paginated>['limit'] = 10,
  offset: Partial<Paginated>['offset'] = 0,
  search?: Partial<Paginated>['search'],
) {
  return api.GET('/v1/audits', {
    params: { query: { limit, offset, search } },
  })
}
