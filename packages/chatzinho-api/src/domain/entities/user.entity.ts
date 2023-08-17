import { PasswordColumn } from '@core/decorators/password-column.decorator'
import { BaseEntity } from '@core/domain/entities/base.entity'
import { UserStatusEnum } from '@domain/enums/user-status.enum'
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm'

import { Bid } from './bid.entity'
import { Role } from './role.entity'

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @Column()
  name: string

  @Column({
    unique: true,
  })
  email: string

  @PasswordColumn()
  password: string

  @Column({
    unique: true,
  })
  cpf: string

  @Column({
    enumName: 'UserStatusEnum',
    enum: UserStatusEnum,
    default: UserStatusEnum.INACTIVE,
  })
  status: UserStatusEnum

  @OneToMany(() => Bid, (bid) => bid.dispute, { nullable: true })
  bids?: Bid[]

  @ManyToMany(() => Role, (role) => role.users, {
    eager: true,
    cascade: true,
  })
  @JoinTable()
  roles?: Role[]

  constructor(
    name: string,
    email: string,
    password: string,
    cpf: string,
    status: UserStatusEnum,
  ) {
    super()
    this.name = name
    this.email = email
    this.password = password
    this.cpf = cpf
    this.status = status
  }
}
