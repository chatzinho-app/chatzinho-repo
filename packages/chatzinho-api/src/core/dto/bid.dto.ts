import { ApiProperty } from '@nestjs/swagger'

import { BaseDto } from './base.dto'
import { DisputeDto } from './dispute.dto'
import { UserDto } from './user.dto'

export class BidDto extends BaseDto {
  /**
   * Bid owner - User who created the bid
   */
  @ApiProperty({
    title: 'Bid owner',
    description: 'User who created the bid',
    type: UserDto,
  })
  owner: UserDto

  /**
   * Bid value
   * @example '1900'
   */
  @ApiProperty({
    type: Number,
    title: 'Bid value',
    example: 1900.0,
  })
  value: number

  /**
   * Dispute - Dispute that bid belongs
   */
  @ApiProperty({
    type: DisputeDto,
    title: 'Dispute bids',
    description: 'Dispute that bid belongs',
  })
  dispute: DisputeDto
}
