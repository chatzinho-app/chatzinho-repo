'use client'

import { createUser, updateUser } from '@common/services/users'
import { apiErrorToast, successToast } from '@common/utils/toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useForm, UseFormReturn } from 'react-hook-form'

import { UserFormSchema, UserFormSchemaValues } from './schema'

interface UseUserFormProps {
  defaultValues?: UserFormSchemaValues
}
interface UseUserFormResponse {
  onSubmit: (values: UserFormSchemaValues) => Promise<void>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<UserFormSchemaValues, any, undefined>
}

export default function useUserForm({
  defaultValues,
}: UseUserFormProps = {}): UseUserFormResponse {
  const route = useRouter()

  const form = useForm<UserFormSchemaValues>({
    resolver: zodResolver(UserFormSchema),
    mode: 'onTouched',
    defaultValues,
  })

  const { mutateAsync: mutateUpdateUser } = useMutation(
    (values: UserFormSchemaValues) => updateUser(values as any),
    {
      onSuccess: (data) => {
        if (data?.error) return apiErrorToast((data as any).error)

        successToast('Usuário atualizado!')
        route.replace('/admin/users')
      },
    },
  )

  const { mutateAsync: mutateCreateUser } = useMutation(
    (values: UserFormSchemaValues) =>
      createUser({
        ...(values as any),
        password: 'liberaai2023',
      }),
    {
      onSuccess: (data) => {
        if (data?.error) return apiErrorToast((data as any).error)

        successToast('Usuário criado!')
        route.replace('/admin/users')
      },
    },
  )

  async function onSubmit(values: UserFormSchemaValues) {
    if (defaultValues?.cpf) {
      await mutateUpdateUser(values)
    } else {
      await mutateCreateUser(values)
    }
  }

  return {
    form,
    onSubmit,
  }
}
