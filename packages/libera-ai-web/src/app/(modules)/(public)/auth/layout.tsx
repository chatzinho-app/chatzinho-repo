import React, { PropsWithChildren } from 'react'

import Card from '@ui/Card'
import Image from 'next/image'

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <Card className="relative mt-[80px] max-w-[100vw] flex-col items-center justify-between self-center sm:max-w-[85vw] md:max-w-[60vw] lg:max-w-[50vw] xl:max-w-[30vw]">
      <Image
        className="pointer-events-none absolute -top-[80px]"
        width={220}
        height={60}
        src="/assets/icons/logo-black.svg"
        alt="Logo da aplicação"
      />
      {children}
    </Card>
  )
}
