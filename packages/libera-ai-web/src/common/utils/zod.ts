import i18next from 'i18next'
import { z, ZodType } from 'zod'
import { zodI18nMap } from 'zod-i18n-map'
import translation from 'zod-i18n-map/locales/pt/zod.json'

i18next.init({
  lng: 'pt-BR',
  resources: {
    pt: { zod: translation },
  },
})
z.setErrorMap(zodI18nMap)

export const zod = z
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type InferZodType<T extends ZodType<any, any, any>> = z.infer<T>
