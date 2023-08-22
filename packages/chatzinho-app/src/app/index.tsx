import { Text, View } from 'react-native'

export default function Page() {
  return (
    <View className="flex-1 items-center p-2">
      <View className="flex-1 justify-center max-w-sm mx-2">
        <Text className="text-xl font-bold">Hello World</Text>
        <Text className="text-md text-cyan-500">
          This is the first page of your app.
        </Text>
      </View>
    </View>
  )
}
