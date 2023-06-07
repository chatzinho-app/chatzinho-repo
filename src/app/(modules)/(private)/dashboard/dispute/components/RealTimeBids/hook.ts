'use client'

interface Bid {
  providerId: string
  providerName: string
  price: number
  createdAt: string
}

interface UseRealTimeBidsValues {
  bids: Bid[]
}

export default function useRealTimeBids(): UseRealTimeBidsValues {
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

  return {
    bids,
  }
}
