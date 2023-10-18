import { validateCPF } from '@common/utils/validators'
import { InferZodType, zod } from '@common/utils/zod'

export const RegisterSchema = zod.object({
  identifier: zod.string().refine((data) => validateCPF(data), {
    message: 'Indentificador Inválido',
  }),
})

export type RegisterFormValues = InferZodType<typeof RegisterSchema>
