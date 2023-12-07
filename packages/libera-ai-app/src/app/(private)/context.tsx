import { createContext, PropsWithChildren, useContext } from 'react'
import { ActivityIndicator } from 'react-native'

import { Redirect } from 'expo-router'

import { UserType } from '@common/interfaces'
import { fetchMe } from '@common/services/auth'
import { useQuery } from '@tanstack/react-query'

interface AuthValues {
  user?: UserType
  isLoading: boolean
}

const AuthContext = createContext<AuthValues>({
  user: undefined,
  isLoading: true,
})

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }: PropsWithChildren) {
  const { data: meData, isLoading } = useQuery(['me'], fetchMe)

  const user = meData?.data

  if (meData?.error && !isLoading) return <Redirect href="/(public)/login" />

  if (isLoading) return <ActivityIndicator size="large" />

  return (
    <AuthContext.Provider value={{ user, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}
