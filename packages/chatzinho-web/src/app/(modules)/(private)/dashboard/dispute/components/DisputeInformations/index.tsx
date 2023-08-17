'use client'

import React from 'react'

import MaskField from '@common/components/fields/MaskField'
import { cn } from '@common/utils/theme'
import Button from '@ui/Button'
import { FormProvider } from 'react-hook-form'

import InformationText from './components/InformationText'
import useDisputeInformations from './hook'

interface DisputeInformationsProps {
  className?: string
}

export default function DisputeInformations({
  className,
}: DisputeInformationsProps) {
  const { form, onSubmit } = useDisputeInformations()

  return (
    <section
      className={cn('flex h-full flex-1 flex-col justify-between', className)}
    >
      <section>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="header">Disputa N° 1</h1>
            <h2 className="sub-header text-green">Em disputa</h2>
          </div>
          <h2 className="header font-bold">09:53</h2>
        </div>

        <div>
          <InformationText
            className="mb-1"
            title="Valor de referência"
            value={2000}
          />
          <InformationText
            className="mb-1"
            title="Valor entre lances"
            value={2000}
          />
          <InformationText title="Vencedor" />
        </div>
      </section>

      <section>
        <InformationText title="Seu melhor lance" value={1700.8} />
        <FormProvider {...form}>
          <form className="mt-6 flex" onSubmit={form.handleSubmit(onSubmit)}>
            <MaskField
              mask="currency"
              name="bid"
              label="Dê seu lance"
              placeholder="R$ 0,00"
            />
            <Button className="ml-2 w-1/2 self-end" type="submit">
              Dar lance
            </Button>
          </form>
        </FormProvider>
      </section>
    </section>
  )
}
