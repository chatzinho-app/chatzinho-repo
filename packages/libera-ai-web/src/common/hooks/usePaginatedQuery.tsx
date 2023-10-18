import { useCallback, useEffect, useState } from 'react'

import { QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query'

export type Pagination = {
  offset: number
  limit: number
}

export function usePaginationQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = Awaited<TQueryFnData>,
  TQueryKey extends QueryKey = QueryKey,
>(
  queryKey: TQueryKey,
  queryFn: (limit: number, offset: number, search: string) => TQueryFnData,
  options?: Omit<
    UseQueryOptions<Awaited<TQueryFnData>, TError, TData, TQueryKey>,
    'queryKey' | 'queryFn'
  >,
) {
  const [search, setSearch] = useState('')
  const [offset, setOffset] = useState(1)
  const [limit] = useState(20)

  const response = useQuery<TQueryFnData, TError, TData, TQueryKey>(
    queryKey,
    () => queryFn(limit, offset, search),
    options as
      | Omit<
          UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
          'queryKey' | 'queryFn'
        >
      | undefined,
  )

  const totalCount = (response as any)?.data?.data?.meta?.count

  const hasNext = totalCount > offset * limit
  const hasPrev = offset > 1

  const setPage = useCallback(
    (page: number) => {
      if (page < 0 || totalCount / limit < page) return

      setOffset(page)
    },
    [hasNext],
  )

  const nextPage = useCallback(() => {
    if (hasNext) setOffset((state) => state + 1)
  }, [hasNext])

  const prevPage = useCallback(() => {
    if (hasPrev) setOffset((state) => state - 1)
  }, [hasPrev])

  const onSearch = useCallback((value: string) => {
    setSearch(value)
    setOffset(1)
  }, [])

  useEffect(() => {
    response.refetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset, search])

  return {
    ...response,
    nextPage,
    prevPage,
    search,
    onSearch,
    setPage,
    offset,
    limit,
    totalCount,
    hasNext,
    hasPrev,
  }
}
