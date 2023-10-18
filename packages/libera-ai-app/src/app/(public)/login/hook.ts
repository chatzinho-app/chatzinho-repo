import { useForm, UseFormReturn } from 'react-hook-form'

import { useRouter } from 'expo-router'

import envs from '@common/constants/envs'
import { fetchLogin } from '@common/services/auth'
import { setStorage } from '@common/utils/storage'
import { apiErrorToast, successToast } from '@common/utils/toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'

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
      onSuccess: async (data) => {
        if (data?.error) return apiErrorToast((data as any).error)

        await setStorage(envs.TOKEN_ALIAS, data.data.token)

        successToast('Usuário encontrado! Bem vindo')
        route.push('/(private)/')
      },
    },
  )

  async function onSubmit(values: LoginFormValues) {
    try {
      await mutateAsync(values)
    } catch (error) {
      console.log('ERROR: ', error)
    }
  }

  return {
    form,
    onSubmit,
  }
}
