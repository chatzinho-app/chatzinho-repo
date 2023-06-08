'use client'
import React, { useState } from 'react'

import { cn } from '@common/utils/theme'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { twMerge } from 'tailwind-merge'

import Input from './Input'
import MaskInput, { MaskInputProps } from './MaskInput'

export interface FieldProps extends Partial<MaskInputProps> {
  errorMessage?: string
  label?: string
}

export default function Field({
  errorMessage,
  label,
  className,
  mask,
  ...props
}: FieldProps) {
  const [visible, setVisible] = useState(false)

  const labelClassName = twMerge(
    'text-default mb-0.5 block',
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
      {mask ? (
        <MaskInput
          invalid={!!errorMessage}
          id={`form_${props?.name}`}
          endDecorator={props?.type === 'password' && endDecorator}
          {...props}
          type={visible ? 'text' : props?.type}
          mask={mask}
        />
      ) : (
        <Input
          invalid={!!errorMessage}
          id={`form_${props?.name}`}
          endDecorator={props?.type === 'password' && endDecorator}
          {...props}
          type={visible ? 'text' : props?.type}
        />
      )}
      {errorMessage && (
        <p className="label mt-0.5 text-sm text-error">{errorMessage}</p>
      )}
    </div>
  )
}
