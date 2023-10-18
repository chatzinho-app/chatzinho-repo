import React, { useState } from 'react'
import { TextInput, TextInputProps, TouchableOpacity, View } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import colors from '@common/theme/colors'
import { cn } from '@common/utils/theme.utils'
import { twMerge } from 'tailwind-merge'

export interface InputProps extends TextInputProps {
  required?: boolean
  invalid?: boolean
  disabled?: boolean
  type?: 'text' | 'password'
  startDecorator?: React.ReactNode
  endDecorator?: React.ReactNode
}

export default function Input({
  invalid,
  startDecorator,
  endDecorator,
  className,
  type,
  disabled,
  ...props
}: InputProps) {
  const [hideText, setHideText] = useState(true)

  const inputClassName = twMerge(
    'bg-white text-gray-1 block block w-full w-full rounded-sm border border-lightgray-1 p-[15] focus:border-primary focus:border-2 focus:p-[14]',
    invalid &&
      'border-error text-error placeholder-error focus:border-error/50',
    !!startDecorator && 'pl-6',
    disabled && 'opacity-70',
  )

  function toogleVisible() {
    setHideText((state) => !state)
  }
  const passwordDecorator = hideText ? (
    <TouchableOpacity onPress={toogleVisible} className="p-1 px-3">
      <Ionicons
        size={23}
        name="md-eye-sharp"
        color={invalid ? colors.error : colors['gray-1']}
      />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={toogleVisible} className="p-1 px-3">
      <Ionicons
        size={23}
        name="md-eye-off"
        color={invalid ? colors.error : colors['gray-1']}
      />
    </TouchableOpacity>
  )

  return (
    <View className={cn('relative w-full items-center', className)}>
      {!!startDecorator && (
        <View className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          {startDecorator}
        </View>
      )}
      <TextInput
        className={inputClassName}
        pointerEvents={disabled ? 'none' : 'auto'}
        autoCapitalize="none"
        {...props}
        placeholderTextColor={invalid ? colors.error : colors['lightgray-1']}
        secureTextEntry={
          type === 'password' ? hideText : props?.secureTextEntry
        }
      />
      <View className={twMerge('absolute bottom-0 right-0')}>
        {type === 'password' ? passwordDecorator : endDecorator}
      </View>
    </View>
  )
}
