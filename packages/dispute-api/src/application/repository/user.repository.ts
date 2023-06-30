import { Injectable } from '@nestjs/common'

import { DEFAULT_PAGINATE } from '@core/constants'
import { OffsetPaginationOutputDto } from '@core/dto/offset-pagination.dto'
import { User } from '@domain/entities/user.entity'
import { IOffsetPaginationOptions } from '@domain/interfaces/offset-paginaton.interface'
import { DataSource, Repository } from 'typeorm'

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(dataSource: DataSource) {
    super(User, dataSource.createEntityManager())
  }

  async findAll(
    paginate: IOffsetPaginationOptions,
  ): Promise<OffsetPaginationOutputDto<User>> {
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

  async save<User>(user: User): Promise<User> {
    return await super.save(user)
  }
}
