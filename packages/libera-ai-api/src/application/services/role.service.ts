import { Injectable } from '@nestjs/common'

import { RoleRepository } from '@application/repository/role.repository'
import { OffsetPaginationOutputDto } from '@core/dto/offset-pagination.dto'
import { Role } from '@domain/entities'
import { IOffsetPaginationOptions } from '@domain/interfaces/offset-paginaton.interface'
import { IRoleService } from '@domain/interfaces/role-service.interface'
import { FindOptionsWhere } from 'typeorm'

@Injectable()
export class RoleService implements IRoleService {
  constructor(private repository: RoleRepository) {}

  async findAll(
    pagination?: IOffsetPaginationOptions,
  ): Promise<OffsetPaginationOutputDto<Role>> {
    return await this.repository.findAll(pagination)
  }

  async findOneBy(
    where: FindOptionsWhere<Role> | FindOptionsWhere<Role>[],
  ): Promise<Role> {
    return this.repository.findOneBy(where)
  }
}
