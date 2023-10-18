import { PasswordColumn } from '@core/decorators/password-column.decorator'
import { BaseEntity } from '@core/domain/entities/base.entity'
import { UserStatusEnum } from '@domain/enums/user-status.enum'
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm'

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

  @Column({ type: 'date' })
  birthdate: Date

  @Column({
    enumName: 'UserStatusEnum',
    enum: UserStatusEnum,
    default: UserStatusEnum.INACTIVE,
  })
  status: UserStatusEnum

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
    birthdate: Date,
  ) {
    super()
    this.name = name
    this.email = email
    this.password = password
    this.cpf = cpf
    this.status = status
    this.birthdate = birthdate
  }
}
