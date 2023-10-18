import { useForm } from 'react-hook-form'

import { verifyIdentifier } from '@common/services/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'

import { RegisterFormValues, RegisterSchema } from './schema'

export default function useRegister() {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(RegisterSchema),
    mode: 'onTouched',
  })

  const { mutateAsync, data, reset } = useMutation(
    (values: RegisterFormValues) =>
      verifyIdentifier({ cpf: values.identifier }),
  )

  async function onSubmit(values: RegisterFormValues) {
    try {
      await mutateAsync(values)
    } catch (error) {
      console.log('ERROR: ', error)
    }
  }

  return {
    reset,
    data,
    form,
    onSubmit,
  }
}
