import { User } from '@domain/entities/user.entity'
import { FindOptionsWhere } from 'typeorm'

export interface IUserService {
  findAll(): Promise<User[]>
  findOneBy(
    where: FindOptionsWhere<User> | FindOptionsWhere<User>[],
  ): Promise<User>
  save(user: User): Promise<User>
}

export const IUserService = 'IUserService'
