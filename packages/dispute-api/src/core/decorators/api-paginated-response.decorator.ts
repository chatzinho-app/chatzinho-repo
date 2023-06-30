import { applyDecorators, Type } from '@nestjs/common'
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger'

import { OffsetPaginationOutputDto } from '@core/dto/offset-pagination.dto'

export const ApiPaginatedResponse = <TModel extends Type<any>>(
  model: TModel,
) => {
  return applyDecorators(
    ApiExtraModels(OffsetPaginationOutputDto),
    ApiExtraModels(model),
    ApiOkResponse({
      description: 'Successfully received model list',
      schema: {
        title: `PaginatedResponseOf${model.name}`,
        allOf: [
          { $ref: getSchemaPath(OffsetPaginationOutputDto) },
          {
            properties: {
              data: {
                type: 'array',
                items: { $ref: getSchemaPath(model) },
              },
            },
          },
        ],
      },
    }),
  )
}
