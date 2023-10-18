import { Injectable } from '@nestjs/common'

import { UserRepository } from '@application/repository/user.repository'
import { Exceptions } from '@core/constants'
import { OffsetPaginationOutputDto } from '@core/dto/offset-pagination.dto'
import { User } from '@domain/entities/user.entity'
import { IOffsetPaginationOptions } from '@domain/interfaces/offset-paginaton.interface'
import { IUserService } from '@domain/interfaces/user-service.interface'
import { DeleteResult, FindOneOptions, FindOptionsWhere } from 'typeorm'

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

  async statistics() {
    return this.repository.statistics()
  }

  async findOne(options: FindOneOptions<User>): Promise<User> {
    return this.repository.findOne(options)
  }

  async findOneBy(
    where: FindOptionsWhere<User> | FindOptionsWhere<User>[],
  ): Promise<User> {
    return this.repository.findOneBy(where)
  }

  async deleteOne(criteria: FindOptionsWhere<User>): Promise<DeleteResult> {
    return this.repository.delete(criteria)
  }

  async createOne(user: User): Promise<User> {
    const createdUser = this.repository.create(user)

    return await this.repository.save(createdUser)
  }

  async update(
    criteria: FindOptionsWhere<User>,
    update: Partial<User>,
  ): Promise<User> {
    const foundUser = await this.findOneBy(criteria)
    if (!foundUser) throw Exceptions.USER_NOT_FOUND
    delete foundUser.password

    const updatedUser = {
      ...foundUser,
      ...update,
    }

    return await this.repository.save(updatedUser)
  }

  async save(user: User): Promise<User> {
    return this.repository.save(user)
  }
}
