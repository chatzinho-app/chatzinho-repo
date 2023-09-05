import '../global.css'

import { useEffect } from 'react'
import { View } from 'react-native'

import FontAwesome from '@expo/vector-icons/FontAwesome'
import {
  Raleway_100Thin as Raleway100Thin,
  Raleway_300Light as Raleway300Light,
  Raleway_400Regular as Raleway400Regular,
  Raleway_500Medium as Raleway500Medium,
  Raleway_600SemiBold as Raleway600SemiBold,
  Raleway_700Bold as Raleway700Bold,
  Raleway_800ExtraBold as Raleway800ExtraBold,
  useFonts,
} from '@expo-google-fonts/raleway'
import { SplashScreen, Stack } from 'expo-router'

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: '(tabs)',
// }

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Raleway100Thin,
    Raleway300Light,
    Raleway400Regular,
    Raleway500Medium,
    Raleway600SemiBold,
    Raleway700Bold,
    Raleway800ExtraBold,
    ...FontAwesome.font,
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  return (
    <View className="bg-gray-1 flex flex-1">
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </View>
  )
}
