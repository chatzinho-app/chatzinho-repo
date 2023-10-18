import { OffsetPaginationOutputDto } from '@core/dto/offset-pagination.dto'
import { Role } from '@domain/entities'
import { FindOptionsWhere } from 'typeorm'

export interface IRoleService {
  findAll(): Promise<OffsetPaginationOutputDto<Role>>
  findOneBy(
    where: FindOptionsWhere<Role> | FindOptionsWhere<Role>[],
  ): Promise<Role>
}

export const IRoleService = 'IRoleService'
