import { Injectable } from '@nestjs/common'

import { Bid } from '@domain/entities'

@Injectable()
export class BidValidator {
  async validate(bid: Bid): Promise<boolean> {
    return !!bid
  }
}
