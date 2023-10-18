import { InferZodType, zod } from '@common/utils/zod'

export const RegisterPasswordSchema = zod
  .object({
    email: zod.string().email(),
    password: zod.string().min(6),
    repeatPassword: zod.string().min(6),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: 'As senhas devem ser identicas',
    path: ['repeatPassword'],
  })

export type RegisterPasswordFormValues = InferZodType<
  typeof RegisterPasswordSchema
>
