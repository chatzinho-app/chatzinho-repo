import React, { PropsWithChildren } from 'react'
import { ScrollView, useWindowDimensions, View } from 'react-native'

import { StatusBar } from 'expo-status-bar'

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

  const LOGO_WIDTH = width / 2

  return (
    <View
      className={`py-8 justify-between items-center self-center w-[140vw] rounded-b-full ${
        color === 'primary'
          ? 'bg-primary text-gray-2'
          : 'bg-secondary text-gray-1'
      }`}
    >
      <StatusBar style={color === 'primary' ? 'light' : 'dark'} />
      <View className="mt-8 mb-7">
        <Logo
          width={LOGO_WIDTH * 0.9}
          height={LOGO_WIDTH / 3.8}
          fill={color === 'primary' ? colors.white : colors.black}
        />
      </View>
      <View className="flex justify-center items-center mb-8">
        <Text
          clsName={`text-3xl font-bold mb-1 ${
            color === 'primary' ? 'text-gray-2' : 'text-gray-1'
          }`}
        >
          {title}
        </Text>
        <Text
          clsName={`text-xl text-center w-[60vw] ${
            color === 'primary' ? 'text-gray-2' : 'text-gray-1'
          }`}
        >
          {subtitle}
        </Text>
      </View>
    </View>
  )
}

export function AuthContainer({
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
