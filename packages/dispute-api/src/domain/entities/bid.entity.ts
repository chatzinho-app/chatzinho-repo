import { BaseEntity } from '@core/domain/entities/base.entity'
import { Column, Entity, ManyToOne } from 'typeorm'

import { Dispute } from './dispute.entity'
import { User } from './user.entity'

@Entity({ name: 'bids' })
export class Bid extends BaseEntity {
  @ManyToOne(() => User, (user) => user.bids)
  owner: User

  @Column()
  value: number

  @ManyToOne(() => Dispute, (dispute) => dispute.bids, {
    eager: true,
  })
  dispute: Dispute
}
