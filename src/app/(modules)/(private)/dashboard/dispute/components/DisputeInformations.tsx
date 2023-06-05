import React from 'react'

import { cn } from '@common/utils/theme'
import Button from '@ui/Button'
import Field from '@ui/Field'

interface InformationTextProps {
  title: string
  price: number
}

function InformationText({ title, price }: InformationTextProps) {
  return (
    <div>
      <p>{title}</p>
      <p>{price}</p>
    </div>
  )
}

interface DisputeInformationsProps {
  className?: string
}

export default function DisputeInformations({
  className,
}: DisputeInformationsProps) {
  return (
    <section className={cn('flex', className)}>
      <div>
        <div>
          <h1>Disputa N° 1</h1>
          <h2>Disputa N° 1</h2>
        </div>
        <h2>09:53</h2>
      </div>

      <section>
        <InformationText title="Valor de referência" price={2000} />
        <InformationText title="Valor entre lances" price={2000} />
        <InformationText title="Vencedor" price={2000} />
      </section>

      <section>
        <InformationText title="Seu melhor lance" price={1700.8} />
        <div>
          <Field label="Dê seu lance" />
          <Button>Dar lance</Button>
        </div>
      </section>
    </section>
  )
}
