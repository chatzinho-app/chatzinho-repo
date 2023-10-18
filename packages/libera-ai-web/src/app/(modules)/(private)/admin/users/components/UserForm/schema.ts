import { RoleType, StatusType } from '@common/interfaces'
import { InferZodType, zod } from '@common/utils/zod'
import { DeepPartial } from 'typeorm'

export const UserFormSchema = zod.object({
  id: zod.string().optional().nullish(),
  name: zod.string().min(5),
  email: zod.string().email(),
  cpf: zod.string(),
  birthdate: zod.string(),
  status: zod.union([
    zod.literal<StatusType>('ACTIVE'),
    zod.literal<StatusType>('INACTIVE'),
  ]),
  role: zod.union([
    zod.literal<RoleType>('SUPER_ADMIN'),
    zod.literal<RoleType>('ADMIN'),
    zod.literal<RoleType>('MANAGER'),
    zod.literal<RoleType>('DOORMAN'),
    zod.literal<RoleType>('RESIDENT'),
  ]),
})

export type UserFormSchemaValues = DeepPartial<
  InferZodType<typeof UserFormSchema>
>
