'use client'
import React, { useState } from 'react'

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
    'block text-default mb-0.5',
    props?.required && "after:content-['*'] after:text-error",
    errorMessage && 'text-error',
  )

  function toogleVisible() {
    setVisible((state) => !state)
  }
  const endDecorator = visible ? (
    <AiOutlineEye size={20} onClick={toogleVisible} />
  ) : (
    <AiOutlineEyeInvisible size={20} onClick={toogleVisible} />
  )

  return (
    <div className={twMerge('w-full', className)}>
      {label && (
        <label htmlFor={`form_${props?.name}`} className={labelClassName}>
          {label}
        </label>
      )}
      <Input
        hasError={!!errorMessage}
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
