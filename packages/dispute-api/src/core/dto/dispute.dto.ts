import { ApiProperty } from '@nestjs/swagger'

import { DiputeStatusEnum } from '@domain/enums/dispute-status.enum'

import { BaseDto } from './base.dto'
import { BidDto } from './bid.dto'

export class DisputeDto extends BaseDto {
  /**
   * Number identifier - Generated identifier used to count the number of disputes
   * @example '1'
   */
  @ApiProperty({
    type: Number,
    title: 'Number identifier',
    description: 'Generated identifier used to count the number of disputes',
    example: 1,
    uniqueItems: true,
  })
  code: number

  /**
   * Reference value - Value used as a reference for the first bids
   * @example '100.0'
   */
  @ApiProperty({
    type: Number,
    title: 'Reference value',
    description: 'Value used as a reference for the first bids',
    example: 100.0,
  })
  referenceValue: number

  /**
   * Value between bids - Value used to define the minimum price interval between bids
   * @example '10.5'
   */
  @ApiProperty({
    type: Number,
    title: 'Value between bids',
    description: 'Value used to define the minimum price interval between bids',
    example: 10.5,
  })
  valueBetweenBids: number

  /**
   * Dispute status - Property to know the current status of the dispute
   * @example 'ACTIVE'
   */
  @ApiProperty({
    type: DiputeStatusEnum,
    enum: DiputeStatusEnum,
    title: 'Dispute status',
    description: `Property to know the current status of the dispute`,
    example: DiputeStatusEnum.IN_DISPUTE,
    default: DiputeStatusEnum.PENDING,
  })
  status: DiputeStatusEnum

  /**
   * Winner id - Property used to store the winner id
   * @example '1d01eb3c-0cb8-11ee-be56-0242ac120002'
   */
  @ApiProperty({
    type: String,
    title: 'Winner id',
    description: 'Property used to store the winner id',
    example: '1d01eb3c-0cb8-11ee-be56-0242ac120002',
    nullable: true,
  })
  winner?: string

  /**
   * Dispute bids - All dispute bids
   */
  @ApiProperty({
    type: BidDto,
    title: 'Dispute bids',
    description: 'All dispute bids',
    isArray: true,
    required: false,
  })
  bids?: BidDto[]
}
