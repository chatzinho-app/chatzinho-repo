import { Injectable } from '@nestjs/common'

import { BidRepository } from '@application/repository/bid.repository'
import { Bid } from '@domain/entities'
import { IBidService } from '@domain/interfaces/bid-service.interface'

@Injectable()
export class BidService implements IBidService {
  constructor(private repository: BidRepository) {}

  async findAll(): Promise<Bid[]> {
    return this.repository.find()
  }

  async save(bid: Bid): Promise<Bid> {
    return this.repository.save(bid)
  }
}
