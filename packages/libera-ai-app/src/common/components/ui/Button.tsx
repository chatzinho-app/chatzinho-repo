import React from 'react'
// import Spinner from './Spinner'
import {
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

import { cn } from '@common/utils/theme.utils'
import { cva, VariantProps } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

import { Text } from './Text'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-sm off z-50',
  {
    variants: {
      variant: {
        solid: '',
        outline: 'border bg-transparent',
      },
      colorSchema: {
        primary: '',
        white: '',
      },
      size: {
        default: 'w-full px-5 py-2',
        sm: 'w-full px-3 py-1',
      },
    },
    compoundVariants: [
      {
        variant: 'solid',
        colorSchema: 'primary',
        class: 'bg-primary shadow-primary/30',
      },
      {
        variant: 'solid',
        colorSchema: 'white',
        class: 'bg-white shadow-transparent',
      },

      {
        variant: 'outline',
        colorSchema: 'primary',
        class: 'border-primary',
      },
      {
        variant: 'outline',
        colorSchema: 'white',
        class: 'border-white',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      size: 'default',
      colorSchema: 'white',
    },
  },
)

const textVariants = cva('text-md', {
  variants: {
    variant: {
      solid: '',
      outline: '',
    },
    colorSchema: {
      primary: 'text-white',
      white: 'text-gray-1',
    },
    size: {
      default: 'text-md',
      sm: 'text-lg',
    },
  },
  compoundVariants: [
    {
      variant: 'solid',
      colorSchema: 'primary',
      class: 'text-white',
    },
    {
      variant: 'solid',
      colorSchema: 'white',
      class: 'text-gray-1',
    },

    {
      variant: 'outline',
      colorSchema: 'primary',
      class: 'text-primary',
    },
    {
      variant: 'outline',
      colorSchema: 'white',
      class: 'text-white',
    },
  ],
  defaultVariants: {
    variant: 'solid',
    size: 'default',
    colorSchema: 'white',
  },
})

export interface ButtonProps
  extends TouchableOpacityProps,
    VariantProps<typeof buttonVariants> {
  loading?: boolean
}

export default function Button({
  size,
  variant,
  loading,
  colorSchema,
  ...props
}: ButtonProps) {
  const className = twMerge(
    props?.className,
    props?.disabled || loading ? 'opacity-50 cursor-disabled' : '',
    'flex flex-row items-center',
  )

  return (
    <TouchableOpacity
      {...props}
      className={cn(buttonVariants({ size, variant, className, colorSchema }))}
      disabled={props?.disabled || loading}
    >
      <Text clsName={textVariants({ size, variant, className, colorSchema })}>
        {props?.children}
      </Text>
      {loading && <ActivityIndicator className="mr-0 ml-0.5" />}
    </TouchableOpacity>
  )
}
