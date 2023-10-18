'use client'
import React, { useState } from 'react'

import { cn } from '@common/utils/theme'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { twMerge } from 'tailwind-merge'

import Input from './Input'
import MaskInput, { MaskInputProps } from './MaskInput'
import SelectInput, { SelectInputProps } from './SelectInput'

export type FieldProps = {
  errorMessage?: string
  label?: string
} & Partial<MaskInputProps> &
  Partial<SelectInputProps>

export default function Field({
  errorMessage,
  label,
  className,
  mask,
  options,
  ...props
}: FieldProps) {
  const [visible, setVisible] = useState(false)

  const labelClassName = twMerge(
    'text-default mb-0.5 block font-semibold text-white',
    props?.required && "after:text-error after:content-['*']",
    errorMessage && 'text-error',
  )

  function toogleVisible() {
    setVisible((state) => !state)
  }
  const endDecorator = visible ? (
    <AiOutlineEye
      size={23}
      onClick={toogleVisible}
      className="cursor-pointer"
    />
  ) : (
    <AiOutlineEyeInvisible
      size={23}
      onClick={toogleVisible}
      className="cursor-pointer"
    />
  )

  return (
    <div className={cn('w-full', className)}>
      {label && (
        <label htmlFor={`form_${props?.name}`} className={labelClassName}>
          {label}
        </label>
      )}
      {mask && (
        <MaskInput
          invalid={!!errorMessage}
          id={`form_${props?.name}`}
          endDecorator={props?.type === 'password' && endDecorator}
          {...props}
          type={visible ? 'text' : props?.type}
          mask={mask}
        />
      )}
      {options && (
        <SelectInput
          id={`form_${props?.name}`}
          invalid={!!errorMessage}
          options={options}
          {...props}
        />
      )}
      {!mask && !options && (
        <Input
          invalid={!!errorMessage}
          id={`form_${props?.name}`}
          endDecorator={props?.type === 'password' && endDecorator}
          {...props}
          type={visible ? 'text' : props?.type}
        />
      )}
      <p
        className={`label mt-0.5 text-sm ${
          errorMessage ? 'text-error' : 'text-transparent'
        }`}
      >
        {errorMessage ?? 'error-message'}
      </p>
    </div>
  )
}
