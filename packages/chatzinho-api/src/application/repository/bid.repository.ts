import { Injectable } from '@nestjs/common'

import { Bid } from '@domain/entities'
import { DataSource, Repository } from 'typeorm'

@Injectable()
export class BidRepository extends Repository<Bid> {
  constructor(dataSource: DataSource) {
    super(Bid, dataSource.createEntityManager())
  }

  async findAll(): Promise<Bid[]> {
    return await super.find()
  }

  async save<Bid>(user: Bid): Promise<Bid> {
    return await super.save(user)
  }
}
