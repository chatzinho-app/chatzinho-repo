import { Injectable } from '@nestjs/common'

import { User } from '@domain/entities/user.entity'
import { DataSource, Repository } from 'typeorm'

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(dataSource: DataSource) {
    super(User, dataSource.createEntityManager())
  }

  async findAll(): Promise<User[]> {
    return await super.find()
  }

  async save<User>(user: User): Promise<User> {
    return await super.save(user)
  }
}
