import React from 'react'

import { cn } from '@common/utils/theme'
import { twMerge } from 'tailwind-merge'

export interface SelectInputProps
  extends React.InputHTMLAttributes<HTMLSelectElement> {
  invalid?: boolean
  options: Array<{
    value: string | number
    label: string
  }>
}

export default function SelectInput({
  invalid,
  options,
  className,
  ...props
}: SelectInputProps) {
  const inputClassName = twMerge(
    'description-text text-dark-gray placeholder-gray focus:border-light-blue focus:ring-light-blue block block w-full w-full rounded-sm border border-lightgray-2 bg-white px-2 py-2 focus:outline-none focus:ring-2',
    invalid &&
      'border-error text-error placeholder-error focus:border-error/50 focus:ring-error/50',
  )

  return (
    <div className={cn('relative w-full', className)}>
      <select className={inputClassName} {...props}>
        <option selected>
          {props?.placeholder ? props?.placeholder : 'Selecione'}
        </option>
        {options?.map((option: SelectInputProps['options'][0]) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
