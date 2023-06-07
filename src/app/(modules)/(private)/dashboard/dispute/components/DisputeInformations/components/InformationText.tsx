import React from 'react'

import { formatCurrency } from '@common/utils/currency'
import { cn } from '@common/utils/theme'

interface InformationTextProps {
  title: string
  value?: number | string
  className?: string
}

export default function InformationText({
  title,
  value,
  className,
}: InformationTextProps) {
  return (
    <div className={cn('flex justify-between', className)}>
      <p className={cn('text-default', value === undefined && 'opacity-30')}>
        {title}
      </p>
      {value && (
        <p className="text-bold text-dark-gray">
          {typeof value === 'string' ? value : formatCurrency(value)}
        </p>
      )}
    </div>
  )
}
