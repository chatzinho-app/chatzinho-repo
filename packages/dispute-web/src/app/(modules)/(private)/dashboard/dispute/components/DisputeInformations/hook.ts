'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, UseFormReturn } from 'react-hook-form'

import { CreateBidSchema, CreateBidValues } from './schema'

interface UseDisputeInformationsValues {
  onSubmit: (values: CreateBidValues) => Promise<void>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<CreateBidValues, any, undefined>
}

export default function useDisputeInformations(): UseDisputeInformationsValues {
  const form = useForm<CreateBidValues>({
    defaultValues: {
      bid: 0,
    },
    resolver: zodResolver(CreateBidSchema),
    mode: 'onTouched',
  })

  async function onSubmit(values: CreateBidValues) {
    console.log('LOGIN VALUES: ', values)
  }

  return {
    form,
    onSubmit,
  }
}
