import React, { PropsWithChildren } from 'react'
import {
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native'

import { Ionicons, Octicons } from '@expo/vector-icons'

import Logo from '@assets/icons/Logo.svg'
import colors from '@common/theme/colors'
import { Text } from '@ui/Text'

interface HeaderProps {
  title: string
  subtitle: string
  color?: 'primary' | 'secondary'
}

function AuthHeader({ title, subtitle, color = 'primary' }: HeaderProps) {
  const { width } = useWindowDimensions()

  const LOGO_WIDTH = width / 2.5

  return (
    <View className="py-8 w-screen">
      {/* <StatusBar style={color === 'primary' ? 'light' : 'dark'} /> */}
      <View className="my-7 w-full flex flex-row justify-between items-center">
        <TouchableOpacity className="p-1 px-4">
          <Ionicons
            size={23}
            name="ios-arrow-back-outline"
            color={colors['white']}
            // color={invalid ? colors.error : colors['gray-1']}
          />
        </TouchableOpacity>
        <Logo
          width={LOGO_WIDTH * 0.9}
          height={LOGO_WIDTH / 3.8}
          fill={color === 'primary' ? colors.white : colors.black}
        />
        <TouchableOpacity className="p-1 px-4">
          <Octicons
            size={23}
            name="bell-fill"
            color={colors['secondary']}
            // color={invalid ? colors.error : colors['gray-1']}
          />
        </TouchableOpacity>
      </View>
      <View className="flex mb-8 px-4 flex-row items-center justify-between">
        <View className="">
          <Text clsName="text-3xl font-bold mb-1 text-white">{title}</Text>
          <Text clsName="text-xl text-gray-2 opacity-50">{subtitle}</Text>
        </View>
        <TouchableOpacity className="py-4">
          <Ionicons
            size={35}
            name="md-chatbubble-ellipses"
            color={colors['white']}
            // color={invalid ? colors.error : colors['gray-1']}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export function PrivateContainer({
  children,
  ...props
}: PropsWithChildren<HeaderProps>) {
  return (
    <ScrollView className="bg-gray-1" automaticallyAdjustKeyboardInsets>
      <AuthHeader {...props} />
      <View className={`px-3 mt-3 h-[50vh]`}>{children}</View>
    </ScrollView>
  )
}
