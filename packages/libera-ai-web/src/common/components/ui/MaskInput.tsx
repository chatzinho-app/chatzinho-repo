'use client'

import React, { useCallback } from 'react'

import { MaskOptions, masks } from '@common/utils/mask'

import Input, { InputProps } from './Input'

export interface MaskInputProps extends InputProps {
  mask: MaskOptions
}

export default function MaskInput({ mask, ...props }: MaskInputProps) {
  const handleOnChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      const unmaskedValue = masks[mask](e)

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      props?.onChange?.(unmaskedValue as any)
    },
    [mask, props],
  )

  return (
    <Input
      {...props}
      defaultValue={
        props?.defaultValue
          ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
            masks[mask](
              {
                currentTarget: { value: props?.defaultValue },
              } as any,
              false,
            )
          : undefined
      }
      onChange={handleOnChange}
    />
  )
}
