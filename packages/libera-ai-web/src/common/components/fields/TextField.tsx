'use client'

import React from 'react'

import Field, { FieldProps } from '@ui/Field'
import { Control, useController } from 'react-hook-form'

interface TextFieldProps extends FieldProps {
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: Control<any>
}

export default function TextField({ name, control, ...props }: TextFieldProps) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  })

  return <Field errorMessage={error?.message} {...props} {...field} />
}
