import React, { useEffect, useRef } from 'react'
import { Animated, useWindowDimensions, View } from 'react-native'

import { router } from 'expo-router'

import SvgLogo from '@assets/icons/Logo.svg'

class Logo extends React.Component<
  { color: string; width: number; height: number },
  object
> {
  render() {
    return (
      <SvgLogo
        width={this.props.width}
        height={this.props.height}
        fill={this.props.color}
      />
    )
  }
}

const AnimatedLogo = Animated.createAnimatedComponent(Logo)

function Circle({
  animatedValue,
  background,
}: {
  animatedValue: Animated.Value
  background: string
}) {
  const { width, height } = useWindowDimensions()

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          backgroundColor: background,
          borderRadius: 9999,
          width: animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, width / 0.5, width * 1.2],
          }),
          height: animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, width / 0.5, height * 1.2],
          }),
        },
      ]}
    ></Animated.View>
  )
}

export default function Splashscreen() {
  const { width } = useWindowDimensions()

  const greenCircle = useRef(new Animated.Value(0)).current
  const purpleCircle = useRef(new Animated.Value(0)).current
  const logoColor = useRef(new Animated.Value(0)).current

  const ANIMATION_DURATION = 800
  const LOGO_WIDTH = width / 2

  useEffect(() => {
    setTimeout(() => {
      Animated.sequence([
        Animated.parallel([
          Animated.timing(greenCircle, {
            toValue: 1,
            duration: ANIMATION_DURATION,
            useNativeDriver: false,
          }),
          Animated.timing(logoColor, {
            toValue: 1,
            duration: ANIMATION_DURATION,
            useNativeDriver: false,
          }),
        ]),
        Animated.parallel([
          Animated.timing(purpleCircle, {
            toValue: 1,
            duration: ANIMATION_DURATION,
            useNativeDriver: false,
          }),
          Animated.timing(logoColor, {
            toValue: 0,
            duration: ANIMATION_DURATION,
            useNativeDriver: false,
          }),
        ]),
      ]).start(() => router.replace('/(public)/'))
    }, 500)
  }, [])

  return (
    <View className="flex-1 flex items-center relative justify-center bg-primary">
      <Circle animatedValue={greenCircle} background="#CFFF5E" />
      <Circle animatedValue={purpleCircle} background="#B87EEE" />
      <AnimatedLogo
        width={LOGO_WIDTH}
        height={LOGO_WIDTH / 3.8}
        color={logoColor.interpolate({
          inputRange: [0, 1],
          outputRange: ['#F9F9F9', '#1A1A1A'],
        })}
      />
    </View>
  )
}
