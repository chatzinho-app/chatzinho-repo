'use client'

import React from 'react'

import Field, { FieldProps } from '@ui/Field'
import { SelectInputProps } from '@ui/SelectInput'
import { Control, useController } from 'react-hook-form'

interface SelectFieldProps extends FieldProps {
  name: string
  options: SelectInputProps['options']
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: Control<any>
}

export default function SelectField({
  name,
  control,
  options,
  ...props
}: SelectFieldProps) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  })

  return (
    <Field
      type=""
      errorMessage={error?.message}
      options={options}
      {...props}
      {...field}
    />
  )
}
