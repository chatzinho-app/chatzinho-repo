import { BaseEntity } from '@core/domain/entities/base.entity'
import { DiputeStatusEnum } from '@domain/enums/dispute-status.enum'
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
    enumName: 'DiputeStatusEnum',
    enum: DiputeStatusEnum,
    default: DiputeStatusEnum.PENDING,
  })
  status: DiputeStatusEnum

  @Column({
    nullable: true,
  })
  winner?: string

  @OneToMany(() => Bid, (bid) => bid.dispute, { nullable: true, cascade: true })
  bids?: Bid[]
}
