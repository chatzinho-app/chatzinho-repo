import { INTERNAL_ERROR_THROWER } from '@core/utils/exceptions.utils'

export function CatchError() {
  return function (
    _: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ): void {
    const method = descriptor.value
    descriptor.value = async function (...args: any) {
      try {
        return await method.apply(this, args)
      } catch (e) {
        const errorPlace = `${this.constructor?.name}.${propertyKey}`
        INTERNAL_ERROR_THROWER(errorPlace, e)
      }
    }
  }
}
