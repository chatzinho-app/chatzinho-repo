import React from 'react'

import { formatCurrency } from '@common/utils/currency'
import { formatDate } from '@common/utils/date'
import { cn } from '@common/utils/theme'
import { HiArrowNarrowDown } from 'react-icons/hi'

interface BidBalloonProps {
  providerName: string
  price: number
  createdAt: string
  isMe: boolean
}

export default function BidBalloon({
  providerName,
  price,
  isMe,
  createdAt,
}: BidBalloonProps) {
  return (
    <div
      className={cn(
        'my-2 justify-between rounded-lg px-3 py-2',
        isMe
          ? 'self-end bg-blue text-white'
          : 'self-start bg-white-blue text-dark-gray',
      )}
    >
      <p className={cn('label', isMe ? 'text-white' : 'text-dark-gray')}>
        {providerName}
      </p>
      <div className="flex">
        <p className={cn('header-2', isMe ? 'text-white' : 'text-dark-gray')}>
          {formatCurrency(price)}
        </p>
        <div
          className={cn(
            'item-center ml-0.5 flex justify-center self-center rounded-full px-1',
            isMe ? 'bg-light-green' : 'bg-green/20',
          )}
        >
          <HiArrowNarrowDown
            size={12}
            className={cn('self-center', isMe ? 'text-white' : 'text-green')}
          />
          <p className={cn('label-bold', isMe ? 'text-white' : 'text-green')}>
            10%
          </p>
        </div>
      </div>
      <p className={cn('action', isMe ? 'text-light-blue' : 'text-dark')}>
        {formatDate(createdAt)}
      </p>
    </div>
  )
}
