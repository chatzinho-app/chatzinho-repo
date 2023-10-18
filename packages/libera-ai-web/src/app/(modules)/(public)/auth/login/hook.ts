'use client'

import envs from '@common/config/envs'
import { fetchLogin } from '@common/services/auth'
import { setCookie } from '@common/utils/storage'
import { apiErrorToast, successToast } from '@common/utils/toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useForm, UseFormReturn } from 'react-hook-form'

import { LoginFormValues, LoginSchema } from './schema'

interface UseLoginValues {
  onSubmit: (values: LoginFormValues) => Promise<void>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<LoginFormValues, any, undefined>
}

export default function useLogin(): UseLoginValues {
  const route = useRouter()

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(LoginSchema),
    mode: 'onTouched',
  })

  const { mutateAsync } = useMutation(
    (values: LoginFormValues) => fetchLogin(values),
    {
      onSuccess: (data) => {
        if (data?.error) return apiErrorToast((data as any).error)

        setCookie(envs.TOKEN_ALIAS, data.data.token)

        successToast('Usuário encontrado! Bem vindo')
        route.push('/admin/dashboard')
      },
    },
  )

  async function onSubmit(values: LoginFormValues) {
    await mutateAsync(values)
  }

  return {
    form,
    onSubmit,
  }
}
