import { Inject, Injectable } from '@nestjs/common'

import { BidService } from '@application/services/bid.service'
import { Bid } from '@domain/entities'

@Injectable()
export class GetAllBidsUseCase {
  constructor(
    @Inject(BidService)
    private bidService: BidService,
  ) {}

  async execute(): Promise<Bid[]> {
    return await this.bidService.findAll()
  }
}
