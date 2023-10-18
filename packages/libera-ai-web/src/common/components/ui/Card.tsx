import { PropsWithChildren } from 'react'

import { cn } from '@common/utils/theme'

export interface CardProps extends PropsWithChildren {
  className?: string
}

export default function Card({ children, className }: CardProps) {
  return (
    <main
      className={cn(
        'shadow-dark-gray/10 z-50 flex flex-1 rounded-lg bg-gray-1 shadow-lg',
        className,
      )}
    >
      {children}
    </main>
  )
}
