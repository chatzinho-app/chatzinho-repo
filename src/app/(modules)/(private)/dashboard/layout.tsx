import React, { PropsWithChildren } from 'react'

import Card from '@ui/Card'
import Image from 'next/image'

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <section className="z-50 mx-8 my-5 mb-7 flex flex-1 flex-col">
      <header className="mb-4 flex items-center justify-between">
        <Image
          className="pointer-events-none"
          width={150}
          height={50}
          src="/assets/logo.png"
          alt="Logo da licitar"
        />
        <div>
          <p className="text-bold text-dark-gray">Lucas Ferreira</p>
          <p className="description-text text-green">Admin</p>
        </div>
      </header>
      <Card className="w-full items-center justify-between self-center">
        {children}
      </Card>
    </section>
  )
}
