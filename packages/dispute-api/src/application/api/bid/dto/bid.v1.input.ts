import { PickType } from '@nestjs/swagger'

import { BidDto } from '@core/dto/bid.dto'

export class BidV1InputDto extends PickType(BidDto, ['value'] as const) {
  disputeId: string
}
