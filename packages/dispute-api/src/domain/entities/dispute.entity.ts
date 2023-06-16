import { BaseEntity } from '@core/domain/entities/base.entity'
import { DiputeStatus } from '@domain/enums/dispute-status.enum'
import { Column, Entity, OneToMany } from 'typeorm'

import { Bid } from './bid.entity'

@Entity({ name: 'disputes' })
export class Dispute extends BaseEntity {
  @Column({
    unique: true,
    generated: 'increment',
  })
  code: number

  @Column()
  referenceValue: number

  @Column()
  valueBetweenBids: number

  @Column({
    enumName: 'DiputeStatus',
    enum: DiputeStatus,
    default: DiputeStatus.PENDING,
  })
  status: DiputeStatus

  @Column({
    nullable: true,
  })
  winner?: string

  @OneToMany(() => Bid, (bid) => bid.dispute, { nullable: true, cascade: true })
  bids?: Bid[]
}
