import React from 'react'

import { cva, VariantProps } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

import { cn } from '../../utils/theme'
import Spinner from './Spinner'

const buttonVariants = cva(
  'inline-flex items-center justify-center description-header transition-colors focus:outline-none disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default:
          'text-white bg-gradient-to-r from-light-blue via-blue to-dark-blue hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-light-blue shadow-lg shadow-blue-500/50',
        outline:
          'bg-transparent border border-zinc-200 hover:bg-zinc-100 disabled:bg-white-gray disabled:text-gray',
        ghost: 'bg-transparent hover:bg-zinc-100',
        link: 'bg-transparent underline-offset-4 hover:underline text-zinc-900 hover:bg-transparent',
      },
      size: {
        default: 'w-full py-2 px-5 rounded-full',
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
