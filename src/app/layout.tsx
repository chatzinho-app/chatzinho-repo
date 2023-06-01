import './globals.css'

import BaseTemplate from '@common/components/BaseTemplate'
import QueryClientProvider from '@common/config/react-query-provider'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <QueryClientProvider>
          <BaseTemplate>{children}</BaseTemplate>
        </QueryClientProvider>
      </body>
    </html>
  )
}
