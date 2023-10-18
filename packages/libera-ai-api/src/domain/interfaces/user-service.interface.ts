import { OffsetPaginationOutputDto } from '@core/dto/offset-pagination.dto'
import { User } from '@domain/entities'
import { FindOptionsWhere } from 'typeorm'

export interface IUserService {
  findAll(): Promise<OffsetPaginationOutputDto<User>>
  findOneBy(
    where: FindOptionsWhere<User> | FindOptionsWhere<User>[],
  ): Promise<User>
  save(user: User): Promise<User>
}

export const IUserService = 'IUserService'
