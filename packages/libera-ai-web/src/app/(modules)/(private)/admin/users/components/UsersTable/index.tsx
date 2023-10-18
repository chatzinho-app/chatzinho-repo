'use client'

import { paths } from '@generated/types'
import Pagination from '@ui/Pagination'
import Table from '@ui/Table'
import TableActions from '@ui/TableActions'
import { useRouter } from 'next/navigation'
import { FetchResponse } from 'openapi-fetch'

import { useUsersTable } from './hook'

export interface UsersTableProps {
  initialUsers: FetchResponse<
    paths['/v1/users']['get']['responses']['200']['content']['application/json']
  >
}

export default function UsersTable({ initialUsers }: UsersTableProps) {
  const router = useRouter()

  const {
    data,
    columns,
    hasNext,
    hasPrev,
    limit,
    offset,
    nextPage,
    prevPage,
    setPage,
    totalCount,
    onSearch,
    onDelete,
  } = useUsersTable({ initialUsers })

  return (
    <section className="flex h-full flex-1 flex-col justify-between">
      <TableActions
        title="Usuários"
        addButtonLabel="Adicionar Usuário"
        onAdd={() => router.push('admin/users/create')}
        onSearch={onSearch}
      />
      <Table
        className="max-h-[80%] flex-1 overflow-scroll"
        columns={columns}
        data={(data as any) ?? []}
        onEdit={(id) => router.push(`admin/users/edit/${id}`)}
        onDelete={async (id) => await onDelete({ id })}
      />
      <Pagination
        className="max-h-[10%]"
        {...{
          hasNext,
          hasPrev,
          limit,
          page: offset,
          nextPage,
          prevPage,
          setPage,
          totalCount,
        }}
      />
    </section>
  )
}
