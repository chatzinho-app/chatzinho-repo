import React from 'react'
import { View } from 'react-native'

import { cn } from '@common/utils/theme.utils'
import { twMerge } from 'tailwind-merge'

import Input, { InputProps } from './Input'
import { Text } from './Text'
// import { MaskInputProps } from './MaskInput'
// import { SelectInputProps } from './SelectInput'

export type FieldProps = {
  errorMessage?: string
  label?: string
  name?: string
} & InputProps

export default function Field({
  errorMessage,
  label,
  className,
  name,
  // mask,
  // options,
  ...props
}: FieldProps) {
  const labelClassName = twMerge(
    'mb-0.5 block font-semibold text-white',
    errorMessage && 'text-error',
  )

  return (
    <View className={cn('w-full my-0.5', className)}>
      {label && (
        <View className="flex flex-row">
          <Text clsName={labelClassName}>{label}</Text>
          {props?.required && (
            <Text clsName="text-error font-bold text-xl"> *</Text>
          )}
        </View>
      )}
      {/* {mask && (
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
      )} */}
      {/* {!mask && !options && ( */}
      <Input invalid={!!errorMessage} id={`form_${name}`} {...props} />
      {/* )}  */}
      <Text
        clsName={`label mt-0.5 text-xs ${
          errorMessage ? 'text-error' : 'text-transparent'
        }`}
      >
        {errorMessage ?? 'error-message'}
      </Text>
    </View>
  )
}
