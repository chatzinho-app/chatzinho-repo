import { useForm, UseFormReturn } from 'react-hook-form'

import { useRouter } from 'expo-router'

import { registerPassword } from '@common/services/auth'
import { apiErrorToast, successToast } from '@common/utils/toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'

import { RegisterPasswordFormValues, RegisterPasswordSchema } from './schema'

interface UseLoginValues {
  onSubmit: (values: RegisterPasswordFormValues) => Promise<void>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<RegisterPasswordFormValues, any, undefined>
}

export default function useRegisterPassword({
  cpf,
}: {
  cpf: string
}): UseLoginValues {
  const route = useRouter()

  const form = useForm<RegisterPasswordFormValues>({
    resolver: zodResolver(RegisterPasswordSchema),
    mode: 'onTouched',
  })

  const { mutateAsync } = useMutation(
    (values: RegisterPasswordFormValues) =>
      registerPassword({
        cpf,
        password: values.password,
        email: values.email,
      }),
    {
      onSuccess: (data) => {
        if (data?.error) return apiErrorToast((data as any).error)

        successToast('Usuário ativado com sucesso!')
        route.push('/(public)/register-success')
      },
    },
  )

  async function onSubmit(values: RegisterPasswordFormValues) {
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
