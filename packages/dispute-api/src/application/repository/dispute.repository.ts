import { Injectable } from '@nestjs/common'

import { Dispute } from '@domain/entities'
import { DataSource, Repository } from 'typeorm'

@Injectable()
export class DisputeRepository extends Repository<Dispute> {
  constructor(dataSource: DataSource) {
    super(Dispute, dataSource.createEntityManager())
  }

  async findAll(): Promise<Dispute[]> {
    return await super.find()
  }

  async save<Dispute>(user: Dispute): Promise<Dispute> {
    return await super.save(user)
  }
}
