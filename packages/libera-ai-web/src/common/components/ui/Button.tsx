import React from 'react'

import { cn } from '@common/utils/theme'
import { cva, VariantProps } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

import Spinner from './Spinner'

const buttonVariants = cva(
  'description-header inline-flex items-center justify-center rounded-sm transition-colors focus:outline-none disabled:cursor-not-allowed disabled:from-lightgray-2 disabled:via-lightgray-2 disabled:to-lightgray-2 disabled:text-lightgray-1',
  {
    variants: {
      variant: {
        solid:
          'focus:ring-light-blue bg-gradient-to-r shadow-lg hover:bg-gradient-to-br focus:outline-none focus:ring-4 disabled:shadow-transparent',
        outline:
          'border bg-transparent disabled:border-transparent disabled:bg-gray-1/10 disabled:text-gray-1/20',
        ghost: 'bg-transparent hover:bg-gray-1/20',
        link: 'text-zinc-900 bg-transparent underline-offset-4 hover:bg-transparent hover:underline',
      },
      colorSchema: {
        primary: '',
        white: '',
      },
      size: {
        default: 'text-md w-full px-5 py-2',
        sm: 'text-lg w-full px-3 py-1',
      },
    },
    compoundVariants: [
      {
        variant: 'solid',
        colorSchema: 'primary',
        class:
          'from-primary/80 via-primary/90 to-primary text-white shadow-primary/30',
      },
      {
        variant: 'solid',
        colorSchema: 'white',
        class: 'from-white via-white to-white text-gray-1 shadow-transparent',
      },

      {
        variant: 'outline',
        colorSchema: 'primary',
        class: 'border-primary text-primary hover:bg-primary hover:text-white',
      },
      {
        variant: 'outline',
        colorSchema: 'white',
        class: 'border-white text-white hover:bg-white hover:text-gray-1',
      },
      // { intent: "", neutral: false, class: "bg-white" },
      // { intent: "primary", neutral: true, class: "bg-blue-300" },
    ],
    defaultVariants: {
      variant: 'solid',
      size: 'default',
      colorSchema: 'white',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean
  drawerId?: string
  openDrawer?: boolean
  closeDrawer?: boolean
  toogleDrawer?: boolean
}

export default function Button({
  size,
  variant,
  loading,
  drawerId,
  openDrawer,
  closeDrawer,
  toogleDrawer,
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
      data-drawer-target={drawerId}
      aria-controls={drawerId}
      data-drawer-show={openDrawer && drawerId}
      data-drawer-hide={closeDrawer && drawerId}
      data-drawer-toggle={toogleDrawer && drawerId}
    >
      {props?.children}
      {loading && <Spinner className="mr-0" />}
    </button>
  )
}
