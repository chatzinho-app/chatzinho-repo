import React, { PropsWithChildren } from 'react'

import Card from '@ui/Card'
import Image from 'next/image'

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <Card className="max-w-[30vw] flex-col items-center justify-between self-center">
      <Image
        className="pointer-events-none absolute left-[5vw] top-6"
        width={150}
        height={50}
        src="/assets/logo.png"
        alt="Logo da licitar"
      />
      {children}
    </Card>
  )
}
