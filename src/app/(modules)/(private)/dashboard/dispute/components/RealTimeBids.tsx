import React from 'react'

import { cn } from '@common/utils/theme'

interface BidBalloonProps {
  providerName: string
  price: number
  createdAt: string
  isMe: boolean
}

function BidBalloon({ providerName, price, isMe, createdAt }: BidBalloonProps) {
  return (
    <div
      className={cn(
        isMe ? 'self-end' : 'self-start',
        isMe ? 'bg-blue' : 'bg-white-blue',
        isMe ? 'text-white' : 'text-dark-gray',
      )}
    >
      <p>{providerName}</p>
      <div className="flex">
        <p>{price}</p>
        <p>10%</p>
      </div>
      <p>{createdAt}</p>
    </div>
  )
}

interface RealTimeBidsProps {
  className?: string
}

export default function RealTimeBids({ className }: RealTimeBidsProps) {
  const bids = [
    {
      providerId: '1',
      providerName: 'Fornecedor 1',
      price: 1900,
      createdAt: new Date().toISOString(),
    },
    {
      providerId: '2',
      providerName: 'Fornecedor 2',
      price: 1800,
      createdAt: new Date().toISOString(),
    },
    {
      providerId: '3',
      providerName: 'Fornecedor 3',
      price: 1700.8,
      createdAt: new Date().toISOString(),
    },
    {
      providerId: '2',
      providerName: 'Fornecedor 2',
      price: 1600,
      createdAt: new Date().toISOString(),
    },
    {
      providerId: '1',
      providerName: 'Fornecedor 1',
      price: 900,
      createdAt: new Date().toISOString(),
    },
  ]

  return (
    <section
      className={cn(
        'flex h-full w-full flex-1 flex-col overflow-hidden rounded-md border border-light-gray',
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
