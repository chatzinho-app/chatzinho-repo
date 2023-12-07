'use client'

import { usePaginationQuery } from '@common/hooks/usePaginatedQuery'
import { fetchPaginatedAudits } from '@common/services/audits.ts'
import { deleteUser } from '@common/services/users'
import { formatCpf, formatDate } from '@common/utils'
import { apiErrorToast, successToast } from '@common/utils/toast'
import { components as ApiTypes } from '@generated/types'
import { useMutation } from '@tanstack/react-query'
import { createColumnHelper } from '@tanstack/react-table'

import { AuditsTableProps } from '.'

export function useAuditsTable({ initialAudits }: AuditsTableProps) {
  const {
    data: usersData,
    refetch,
    ...props
  } = usePaginationQuery(['audits'], fetchPaginatedAudits, {
    initialData: initialAudits,
  })

  const data = usersData?.data?.data?.map((item) => ({
    id: item._id,
    userId: item.userId,
    name: item.userName,
    action: item.actionName,
    actionMethod: item.actionMethod,
    ip: item.actionName,
    createdAt: new Date(item.timestamp),
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

  type columnsType = ApiTypes['schemas']['UserV1OutputDto'] & {
    id: string
    userId: string
    action: string
    actionMethod: string
    ip: string
    createdAt: Date
  }

  const columnHelper = createColumnHelper<columnsType>()

  const columns = [
    columnHelper.accessor('id', {
      cell: (info) => info.getValue(),
      header: 'ID',
    }),
    columnHelper.accessor('userId', {
      cell: (info) => info.getValue(),
      header: 'ID do usuário',
    }),
    columnHelper.accessor('name', {
      cell: (info) => info.getValue(),
      header: 'Nome',
    }),
    columnHelper.accessor('actionMethod', {
      cell: (info) => info.getValue(),
      header: 'Método',
    }),
    columnHelper.accessor('action', {
      cell: (info) => info.getValue(),
      header: 'Ação',
    }),
    columnHelper.accessor('ip', {
      cell: (info) => formatCpf(info.getValue()),
      header: 'IP',
    }),
    columnHelper.accessor('createdAt', {
      cell: (info) => formatDate(info.getValue()),
      header: 'Data da Requisição',
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
