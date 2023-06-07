'use client'

import React from 'react'

import { cn } from '@common/utils/theme'

import BidBalloon from './components/BidBalloon'
import useRealTimeBids from './hook'

interface RealTimeBidsProps {
  className?: string
}

export default function RealTimeBids({ className }: RealTimeBidsProps) {
  const { bids } = useRealTimeBids()

  return (
    <section
      className={cn(
        'flex max-h-full w-full flex-1 flex-col overflow-hidden rounded-md border border-light-gray px-5',
        className,
      )}
    >
      {bids?.map((bid, index) => (
        <BidBalloon
          key={`${bid.providerId}_${index}`}
          providerName={bid?.providerName}
          price={bid.price}
          createdAt={bid.createdAt}
          isMe={index === 2}
        />
      ))}
    </section>
  )
}
