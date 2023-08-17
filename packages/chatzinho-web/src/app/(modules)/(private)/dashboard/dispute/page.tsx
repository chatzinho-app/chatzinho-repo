import React from 'react'

import DisputeInformations from './components/DisputeInformations'
import RealTimeBids from './components/RealTimeBids'

export default function Dispute() {
  return (
    <>
      <DisputeInformations className="mr-2 w-[50%]" />
      <RealTimeBids className="ml-2 w-[50%]" />
    </>
  )
}
