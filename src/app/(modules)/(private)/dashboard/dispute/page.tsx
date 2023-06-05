import React from 'react'

import DisputeInformations from './components/DisputeInformations'
import RealTimeBids from './components/RealTimeBids'

export default function Dispute() {
  return (
    <>
      <DisputeInformations className="w-[50%]" />
      <RealTimeBids className="w-[50%]" />
    </>
  )
}
