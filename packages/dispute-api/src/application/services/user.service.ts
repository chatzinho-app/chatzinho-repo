import { Injectable } from '@nestjs/common'

import { UserRepository } from '@application/repository/user.repository'
import { User } from '@domain/entities/user.entity'
import { IUserService } from '@domain/interfaces/user-service.interface'
import { FindOptionsWhere } from 'typeorm'

@Injectable()
export class UserService implements IUserService {
  constructor(private repository: UserRepository) {}

  async findAll(): Promise<User[]> {
    return this.repository.find()
  }

  async findOneByIdWithRoles(id: string): Promise<User> {
    return this.repository.findOne({
      where: { id },
      relations: ['roles'],
    })
  }

  async findOneBy(
    where: FindOptionsWhere<User> | FindOptionsWhere<User>[],
  ): Promise<User> {
    return this.repository.findOneBy(where)
  }

  async save(user: User): Promise<User> {
    return this.repository.save(user)
  }
}
