import React from 'react'
import { Control, useController } from 'react-hook-form'

import Field, { FieldProps } from '@ui/Field'

interface TextFieldProps extends FieldProps {
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: Control<any>
}

export default function TextField({ name, control, ...props }: TextFieldProps) {
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
      onChangeText={onChange}
      onBlur={onBlur}
      value={value}
    />
  )
}
