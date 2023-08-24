import { Bid } from '@domain/entities'

export interface IBidService {
  findAll(): Promise<Bid[]>
  save(user: Bid): Promise<Bid>
}

export const IBidService = 'IBidService'
