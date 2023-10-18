import envs from '@common/config/envs'
import {
  deleteCookie as deleteNextCookie,
  getCookie as getNextCookies,
  setCookie as setNextCookie,
} from 'cookies-next'

const prefix = envs.COOKIES_PREFIX

export function getCookie(
  key: string,
  options?: Parameters<typeof getNextCookies>['1'],
) {
  return getNextCookies(`@${prefix}:${key}`, options)
}

export function setCookie(
  key: string,
  value: string,
  options?: Parameters<typeof setNextCookie>[2],
) {
  return setNextCookie(`@${prefix}:${key}`, value, options)
}

export function removeCookie(
  key: string,
  options?: Parameters<typeof deleteNextCookie>[1],
) {
  return deleteNextCookie(`@${prefix}:${key}`, options)
}
