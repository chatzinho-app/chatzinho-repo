import { OffsetPaginationOutputDto } from '@core/dto/offset-pagination.dto'
import { FilterQuery, Model } from 'mongoose'

export const paginateModelData = async <T>(
  model: Model<T>,
  filters: FilterQuery<T>,
  limit: number,
  offset: number,
): Promise<OffsetPaginationOutputDto<T>> => {
  const count = await model.countDocuments(filters).exec()
  const data = await model
    .find(filters)
    .sort({ timestamp: 'desc' })
    .skip(Number((offset > 0 ? offset - 1 : offset) * limit))
    .limit(limit)

  return {
    meta: {
      offset,
      limit,
      count,
    },
    data,
  }
}
