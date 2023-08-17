import { Dispute } from '@domain/entities'
import { FindOptionsWhere } from 'typeorm'

export interface IDisputeService {
  findAll(): Promise<Dispute[]>
  findOneBy(
    where: FindOptionsWhere<Dispute> | FindOptionsWhere<Dispute>[],
  ): Promise<Dispute>
}

export const IDisputeService = 'IDisputeService'
