import { ActivityIndicator } from 'react-native'

import { Redirect, Stack } from 'expo-router'

import { fetchMe } from '@common/services/auth'
import { useQuery } from '@tanstack/react-query'

export default function PrivateLayout() {
  const { data, isLoading } = useQuery(['me'], () => fetchMe())

  if (isLoading) return <ActivityIndicator size="large" />

  if (data?.error && !isLoading) return <Redirect href="/(public)/login" />

  return <Stack screenOptions={{ headerShown: false }} />
}
