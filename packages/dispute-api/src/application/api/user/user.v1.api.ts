import { Controller, Get, Query } from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'

import { Roles } from '@core/decorators'
import { ApiPaginatedResponse } from '@core/decorators/api-paginated-response.decorator'
import {
  OffsetPaginationOptionsDto,
  OffsetPaginationOutputDto,
} from '@core/dto/offset-pagination.dto'
import { RolesEnum } from '@domain/enums'
import { GetAllUsersUseCase } from '@usecases/user'

import { UserMapper, UserV1OutputDto } from './dto'

@ApiBearerAuth()
@ApiTags('Users')
@Controller({ path: 'users', version: '1' })
export class UserV1Api {
  constructor(private readonly getAllUsersUseCase: GetAllUsersUseCase) {}

  @Get('/')
  @ApiOperation({
    description: 'List all users',
    tags: ['auth'],
  })
  @Roles(RolesEnum.ADMIN, RolesEnum.SUPER_ADMIN)
  @ApiPaginatedResponse(UserV1OutputDto)
  async getAll(
    @Query() paginateOption: OffsetPaginationOptionsDto,
  ): Promise<OffsetPaginationOutputDto<UserV1OutputDto>> {
    const users = await this.getAllUsersUseCase.execute(paginateOption)

    return {
      data: UserMapper.toList(users.data),
      meta: users.meta,
    }
  }
}
