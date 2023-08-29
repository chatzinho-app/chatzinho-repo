'use client'

import React from 'react'

import Field, { FieldProps } from '@ui/Field'
import { MaskInputProps } from '@ui/MaskInput'
import { Control, useController } from 'react-hook-form'

interface TextFieldProps extends FieldProps {
  name: string
  mask: MaskInputProps['mask']
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: Control<any>
}

export default function MaskField({ name, control, ...props }: TextFieldProps) {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    name,
    control,
  })

  return (
    <Field
      errorMessage={error?.message}
      {...props}
      {...{ onChange, onBlur, defaultValue: value }}
    />
  )
}
