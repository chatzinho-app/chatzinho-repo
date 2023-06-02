import { PropsWithChildren } from 'react'

import { cn } from '@common/utils/theme'

export interface CardProps extends PropsWithChildren {
  className?: string
}

export default function Card({ children, className }: CardProps) {
  return (
    <main
      className={cn(
        'z-50 m-8 flex flex-1 rounded-md bg-white px-8 py-6 shadow-lg',
        className,
      )}
    >
      {children}
    </main>
  )
}
