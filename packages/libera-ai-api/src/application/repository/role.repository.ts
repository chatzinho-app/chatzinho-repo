import { Injectable } from '@nestjs/common'

import { DEFAULT_PAGINATE } from '@core/constants'
import { OffsetPaginationOutputDto } from '@core/dto/offset-pagination.dto'
import { Role } from '@domain/entities'
import { IOffsetPaginationOptions } from '@domain/interfaces/offset-paginaton.interface'
import { DataSource, Repository } from 'typeorm'

@Injectable()
export class RoleRepository extends Repository<Role> {
  constructor(dataSource: DataSource) {
    super(Role, dataSource.createEntityManager())
  }

  async findAll(
    paginate: IOffsetPaginationOptions,
  ): Promise<OffsetPaginationOutputDto<Role>> {
    const limit = paginate?.limit ?? DEFAULT_PAGINATE.limit
    const offset = paginate?.offset ?? DEFAULT_PAGINATE.offset

    const [data, count] = await super.findAndCount({
      take: Number(limit),
      skip: Number(offset * limit),
    })

    return {
      data,
      meta: {
        limit,
        offset,
        count,
      },
    }
  }
}
