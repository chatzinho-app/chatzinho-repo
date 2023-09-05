import { useWindowDimensions, View } from 'react-native'

import Logo from '@assets/icons/Logo.svg'
import { Text } from '@ui/Text'

export default function Login() {
  const { width } = useWindowDimensions()

  const LOGO_WIDTH = width / 2

  return (
    <View className="flex-1 flex items-center bg-gray-1">
      <View className="py-8 justify-between items-center w-[140vw] bg-primary rounded-b-full">
        <View className="mt-8 mb-7">
          <Logo width={LOGO_WIDTH} height={LOGO_WIDTH / 3.8} />
        </View>
        <View className="flex justify-center items-center mb-8">
          <Text clsName="text-3xl font-bold text-gray-2 mb-1">Login</Text>
          <Text clsName="text-xl text-center text-gray-2">
            Informe seu e-mail e senha{'\n'}para entrar na sua conta
          </Text>
        </View>
      </View>
      <View className="flex flex-1 w-full bg-gray-1"></View>
    </View>
  )
}
