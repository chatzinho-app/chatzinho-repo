import { PropsWithChildren } from 'react'

export default function BaseTemplate({ children }: PropsWithChildren) {
  return (
    <div className="relative flex h-[100vh] w-[100vw] flex-1 content-center justify-center overflow-hidden">
      <div className="absolute -bottom-[25vw] -left-[25vw] h-[50vw] w-[50vw] rounded-full bg-blue blur-[300px]"></div>
      <div className="absolute -right-[25vw] -top-[25vw] h-[50vw] w-[50vw] rounded-full bg-blue blur-[300px]"></div>
      {children}
    </div>
  )
}
