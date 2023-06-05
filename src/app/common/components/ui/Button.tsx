import React from 'react'

import { cn } from '@common/utils/theme'
import { cva, VariantProps } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

import Spinner from './Spinner'

const buttonVariants = cva(
  'description-header inline-flex items-center justify-center transition-colors focus:outline-none disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default:
          'shadow-blue-500/50 bg-gradient-to-r from-light-blue via-blue to-dark-blue text-white shadow-lg hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-light-blue disabled:from-white-gray disabled:via-white-gray disabled:to-white-gray disabled:text-gray disabled:shadow-transparent',
        outline:
          'border-zinc-200 hover:bg-zinc-100 border bg-transparent disabled:bg-white-gray disabled:text-gray',
        ghost: 'hover:bg-zinc-100 bg-transparent',
        link: 'text-zinc-900 bg-transparent underline-offset-4 hover:bg-transparent hover:underline',
      },
      size: {
        default: 'w-full rounded-full px-5 py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean
}

export default function Button({
  size,
  variant,
  loading,
  ...props
}: ButtonProps) {
  const className = twMerge(
    props?.className,
    loading ? 'disabled:cursor-progress' : '',
  )

  return (
    <button
      {...props}
      className={cn(buttonVariants({ size, variant, className }))}
      disabled={props?.disabled || loading}
    >
      {props?.children}
      {loading && <Spinner className="mr-0" />}
    </button>
  )
}
