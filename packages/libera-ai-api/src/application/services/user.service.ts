import { Injectable } from '@nestjs/common'

import { UserRepository } from '@application/repository/user.repository'
import { OffsetPaginationOutputDto } from '@core/dto/offset-pagination.dto'
import { User } from '@domain/entities/user.entity'
import { IOffsetPaginationOptions } from '@domain/interfaces/offset-paginaton.interface'
import { IUserService } from '@domain/interfaces/user-service.interface'
import { DeepPartial, FindOptionsWhere, UpdateResult } from 'typeorm'

@Injectable()
export class UserService implements IUserService {
  constructor(private repository: UserRepository) {}

  async findAll(
    pagination?: IOffsetPaginationOptions,
  ): Promise<OffsetPaginationOutputDto<User>> {
    return await this.repository.findAll(pagination)
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

  async update(
    criteria: FindOptionsWhere<User>,
    update: DeepPartial<User>,
  ): Promise<UpdateResult> {
    return this.repository.update(criteria, update)
  }

  async save(user: User): Promise<User> {
    return this.repository.save(user)
  }
}
