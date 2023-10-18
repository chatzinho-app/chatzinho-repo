import { View } from 'react-native'

import { FontAwesome } from '@expo/vector-icons'

import { Text } from '@ui/Text'

export default function NotFoundAlert() {
  return (
    <View className="bg-error p-1 rounded-sm flex flex-row item-center px-2">
      <FontAwesome name="exclamation-triangle" size={24} color="white" />
      <Text clsName="text-white max-w-[80%] ml-2">
        Ops, não encontramos você, confira seu identificador
      </Text>
    </View>
  )
}
