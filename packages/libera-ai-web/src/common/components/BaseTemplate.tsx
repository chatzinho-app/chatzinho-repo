'use client'

import { PropsWithChildren } from 'react'

import { ToastContainer } from 'react-toastify'

export default function BaseTemplate({ children }: PropsWithChildren) {
  return (
    <div className="align-center relative flex min-h-screen flex-1 content-center justify-center overflow-hidden">
      <ToastContainer />
      <div className="absolute -bottom-[25vw] -left-[25vw] h-[50vw] w-[50vw] rounded-full bg-tertiary blur-[200px]"></div>
      <div className="absolute -right-[25vw] -top-[25vw] h-[50vw] w-[50vw] rounded-full bg-secondary blur-[200px]"></div>
      {children}
    </div>
  )
}
