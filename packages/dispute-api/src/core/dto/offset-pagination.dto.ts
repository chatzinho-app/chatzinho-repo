import { ApiProperty, PickType } from '@nestjs/swagger'

import { DEFAULT_PAGINATE } from '@core/constants'

export class OffsetPaginationOptionsDto {
  /**
   * Defines what page to display
   * @example '1'
   */
  @ApiProperty({
    type: Number,
    title: 'Defines what page to display',
    description: 'must be higher than zero',
    example: 2,
    minimum: 1,
    default: 1,
    required: false,
  })
  offset: number

  /**
   * Define number of elements per page
   * @example '15'
   */
  @ApiProperty({
    type: Number,
    title: 'Define number of elements per page',
    example: 15,
    minimum: 0,
    default: 0,
    required: false,
  })
  limit: number
}

class OffsetPaginationMetaDto extends PickType(OffsetPaginationOptionsDto, [
  'limit',
  'offset',
] as const) {
  /**
   * The total number of items
   * @example '100'
   */
  @ApiProperty({
    type: Number,
    title: 'The total number of items',
    example: 100,
    minimum: 0,
    default: 0,
  })
  count: number
}

export class OffsetPaginationInputDto<T> {
  readonly params?: T

  @ApiProperty({ type: () => OffsetPaginationOptionsDto })
  readonly paginate: OffsetPaginationOptionsDto

  constructor(
    params?: T,
    paginate: OffsetPaginationOptionsDto = DEFAULT_PAGINATE,
  ) {
    this.params = params
    this.paginate = paginate
  }
}

export class OffsetPaginationOutputDto<T> {
  @ApiProperty({ isArray: true })
  readonly data: T[]

  @ApiProperty({ type: () => OffsetPaginationMetaDto })
  readonly meta: OffsetPaginationMetaDto

  constructor(data: T[], meta: OffsetPaginationMetaDto) {
    this.data = data
    this.meta = meta
  }
}
