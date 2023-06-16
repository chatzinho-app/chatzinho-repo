import { BaseEntity } from '@core/domain/entities/base.entity'
import { RolesEnum } from '@domain/enums/roles.enum'
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm'

import { User } from './user.entity'

@Entity()
export class Role extends BaseEntity {
  @Column()
  name: RolesEnum

  @ManyToMany(() => User, (user) => user.roles, { nullable: true })
  @JoinTable()
  users?: User[]
}
