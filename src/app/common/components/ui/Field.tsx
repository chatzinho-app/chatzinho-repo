'use client'
import React, { useState } from 'react'

import { cn } from '@common/utils/theme'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { twMerge } from 'tailwind-merge'

import Input from './Input'

export interface FieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  label?: string
}

export default function Field({
  errorMessage,
  label,
  className,
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
    <AiOutlineEye size={23} onClick={toogleVisible} />
  ) : (
    <AiOutlineEyeInvisible size={23} onClick={toogleVisible} />
  )

  return (
    <div className={cn('w-full', className)}>
      {label && (
        <label htmlFor={`form_${props?.name}`} className={labelClassName}>
          {label}
        </label>
      )}
      <Input
        invalid={!!errorMessage}
        id={`form_${props?.name}`}
        endDecorator={props?.type === 'password' && endDecorator}
        {...props}
        type={visible ? 'text' : props?.type}
      />
      {errorMessage && (
        <p className="label mt-0.5 text-sm text-error">{errorMessage}</p>
      )}
    </div>
  )
}
