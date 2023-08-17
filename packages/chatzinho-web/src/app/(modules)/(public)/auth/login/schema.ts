import { InferZodType, zod } from '@common/utils/zod'

export const LoginSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6),
})

export type LoginFormValues = InferZodType<typeof LoginSchema>
