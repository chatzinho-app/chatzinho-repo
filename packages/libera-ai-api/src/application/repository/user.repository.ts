import { Injectable } from '@nestjs/common'

import { DEFAULT_PAGINATE } from '@core/constants'
import { OffsetPaginationOutputDto } from '@core/dto/offset-pagination.dto'
import { User } from '@domain/entities/user.entity'
import { RolesEnum } from '@domain/enums'
import { IOffsetPaginationOptions } from '@domain/interfaces/offset-paginaton.interface'
import { DataSource, ILike, Repository } from 'typeorm'

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(dataSource: DataSource) {
    super(User, dataSource.createEntityManager())
  }

  async statistics() {
    const residentQuery = super.count({
      where: {
        roles: {
          name: RolesEnum.RESIDENT,
        },
      },
      relations: ['roles'],
    })
    const doormanQuery = super.count({
      where: {
        roles: {
          name: RolesEnum.DOORMAN,
        },
      },
      relations: ['roles'],
    })
    const adminQuery = super.count({
      where: {
        roles: {
          name: RolesEnum.ADMIN,
        },
      },
      relations: ['roles'],
    })

    const [residentCount, doormanCount, adminCount] = await Promise.all([
      residentQuery,
      doormanQuery,
      adminQuery,
    ])

    return {
      count: {
        resident: residentCount,
        doorman: doormanCount,
        admin: adminCount,
      },
    }
  }

  async findAll(
    paginate: IOffsetPaginationOptions,
  ): Promise<OffsetPaginationOutputDto<User>> {
    const limit = paginate?.limit ?? DEFAULT_PAGINATE.limit
    const offset = paginate?.offset ?? DEFAULT_PAGINATE.offset

    const search = paginate?.search

    const [data, count] = await super.findAndCount({
      where: search && [
        { cpf: ILike(`%${search}%`) },
        { email: ILike(`%${search}%`) },
        { name: ILike(`%${search}%`) },
      ],
      take: Number(limit),
      skip: Number((offset > 0 ? offset - 1 : offset) * limit),
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
