import { PickType } from '@nestjs/swagger'

import { Bid } from '@domain/entities'

export class CreateBidDto extends PickType(Bid, ['value']) {
  ownerId: string
  disputeId: string
}
