import React from 'react'

import { cn } from '@common/utils/theme'
import Button from '@ui/Button'
import Field from '@ui/Field'

import InformationText from './components/InformationText'

interface DisputeInformationsProps {
  className?: string
}

export default function DisputeInformations({
  className,
}: DisputeInformationsProps) {
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
        <div className="mt-6 flex">
          <Field label="Dê seu lance" />
          <Button className="ml-2 w-1/2 self-end">Dar lance</Button>
        </div>
      </section>
    </section>
  )
}
