import React from 'react'

import { cn } from '@common/utils/theme'
import { twMerge } from 'tailwind-merge'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean
  startDecorator?: React.ReactNode
  endDecorator?: React.ReactNode
}

export default function Input({
  invalid,
  startDecorator,
  endDecorator,
  className,
  ...props
}: InputProps) {
  const inputClassName = twMerge(
    'description-text block block w-full w-full rounded-full border border-light-gray bg-white px-2 py-2 text-dark-gray placeholder-gray focus:border-light-blue focus:outline-none focus:ring-2 focus:ring-light-blue',
    invalid &&
      'border-error text-error placeholder-error focus:border-error/50 focus:ring-error/50',
    !!startDecorator && 'pl-6',
  )

  return (
    <div className={cn('relative w-full', className)}>
      {!!startDecorator && (
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          {startDecorator}
        </div>
      )}
      <input className={inputClassName} {...props} />
      <div
        className={twMerge(
          'absolute bottom-2 right-3',
          invalid ? 'text-error' : 'text-gray',
        )}
      >
        {endDecorator}
      </div>
    </div>
  )
}
