import { InferZodType, zod } from '@common/utils/zod'

export const CreateBidSchema = zod.object({
  bid: zod.number(),
})

export type CreateBidValues = InferZodType<typeof CreateBidSchema>
