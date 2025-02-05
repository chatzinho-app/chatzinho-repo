'use client'

import React from 'react'

import {
  QueryClient,
  QueryClientProvider as QCProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function QueryClientProvider({
  children,
}: React.PropsWithChildren) {
  const [client] = React.useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } }),
  )

  return (
    <QCProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QCProvider>
  )
}
