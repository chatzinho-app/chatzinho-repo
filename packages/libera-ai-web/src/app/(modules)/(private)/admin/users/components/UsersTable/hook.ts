'use client'

import { usePaginationQuery } from '@common/hooks/usePaginatedQuery'
import { deleteUser, fetchPaginatedUsers } from '@common/services/users'
import { formatCpf, formatDate, formatRole, formatStatus } from '@common/utils'
import { apiErrorToast, successToast } from '@common/utils/toast'
import { components as ApiTypes } from '@generated/types'
import { useMutation } from '@tanstack/react-query'
import { createColumnHelper } from '@tanstack/react-table'

import { UsersTableProps } from '.'

export function useUsersTable({ initialUsers }: UsersTableProps) {
  const {
    data: usersData,
    refetch,
    ...props
  } = usePaginationQuery(['users'], fetchPaginatedUsers, {
    initialData: initialUsers,
  })

  const data = usersData?.data?.data?.map((item) => ({
    id: item.id,
    name: item.name,
    cpf: item.cpf,
    email: item.email,
    birthdate: item.birthdate,
    status: item.status,
    roles: item.roles,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
  }))

  const { mutateAsync: mutateDeleteUser } = useMutation(
    (values: { id: string }) => deleteUser(values),
    {
      onSuccess: async (data) => {
        if (data?.error) return apiErrorToast((data as any).error)

        await refetch()

        successToast('Usuário deletado!')
      },
    },
  )

  const columnHelper =
    createColumnHelper<ApiTypes['schemas']['UserV1OutputDto']>()

  const columns = [
    columnHelper.accessor('id', {
      cell: (info) => info.getValue(),
      header: 'ID',
    }),
    columnHelper.accessor('name', {
      cell: (info) => info.getValue(),
      header: 'Nome',
    }),
    columnHelper.accessor('cpf', {
      cell: (info) => formatCpf(info.getValue()),
      header: 'Documento',
    }),
    columnHelper.accessor('email', {
      cell: (info) => info.getValue(),
      header: 'Email',
    }),
    columnHelper.accessor('birthdate', {
      cell: (info) => formatDate(info.getValue() ?? new Date(), 'loc-short'),
      header: 'Data de nascimento',
      meta: {
        isDate: true,
      },
    }),
    columnHelper.accessor('status', {
      cell: (info) => formatStatus(info?.getValue() as any),
      header: 'Status',
    }),
    columnHelper.accessor('roles', {
      cell: (info) => formatRole(info?.getValue()?.[0] as any),
      header: 'Cargo',
    }),
    columnHelper.accessor('createdAt', {
      cell: (info) => formatDate(info.getValue()),
      header: 'Data de criação',
      meta: {
        isDate: true,
      },
    }),
    columnHelper.accessor('updatedAt', {
      cell: (info) => formatDate(info.getValue() as any),
      header: 'Ultima atualização',
      meta: {
        isDate: true,
      },
    }),
  ]

  return {
    data,
    columns,
    onDelete: mutateDeleteUser,
    ...props,
  }
}
