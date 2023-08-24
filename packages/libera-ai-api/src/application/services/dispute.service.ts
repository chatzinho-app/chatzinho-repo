import { Injectable } from '@nestjs/common'

import { DisputeRepository } from '@application/repository/dispute.repository'
import { Dispute } from '@domain/entities'
import { IDisputeService } from '@domain/interfaces/dispute-service.interface'
import { FindOptionsWhere } from 'typeorm'

@Injectable()
export class DisputeService implements IDisputeService {
  constructor(private repository: DisputeRepository) {}

  async findAll(): Promise<Dispute[]> {
    return this.repository.find()
  }

  async findOneBy(
    where: FindOptionsWhere<Dispute> | FindOptionsWhere<Dispute>[],
  ): Promise<Dispute> {
    return this.repository.findOneBy(where)
  }

  async save(bid: Dispute): Promise<Dispute> {
    return this.repository.save(bid)
  }
}
