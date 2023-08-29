'use client'

import { zodResolver } from '@hookform/resolvers/zod'
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

  async function onSubmit(values: LoginFormValues) {
    console.log('LOGIN VALUES: ', values)

    route.push('/dashboard/dispute')
  }

  return {
    form,
    onSubmit,
  }
}
