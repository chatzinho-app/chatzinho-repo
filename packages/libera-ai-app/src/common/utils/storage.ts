import envs from '@common/constants/envs'
import AsyncStorage from '@react-native-async-storage/async-storage'

const prefix = envs.COOKIES_PREFIX

export async function getStorage(
  key: string,
  // options?: Parameters<typeof getNextCookies>['1'],
) {
  return await AsyncStorage.getItem(`@${prefix}:${key}`)
}

export async function setStorage(
  key: string,
  value: string,
  // options?: Parameters<typeof setNextCookie>[2],
) {
  return await AsyncStorage.setItem(`@${prefix}:${key}`, value)
}

export async function removeCookie(
  key: string,
  // options?: Parameters<typeof deleteNextCookie>[1],
) {
  return await AsyncStorage.removeItem(`@${prefix}:${key}`)
}
