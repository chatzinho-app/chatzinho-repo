import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger'

import { Roles } from '@core/decorators'
import { ApiPaginatedResponse } from '@core/decorators/api-paginated-response.decorator'
import { OmitAudit } from '@core/decorators/omit-audit.decorator'
import {
  OffsetPaginationOptionsDto,
  OffsetPaginationOutputDto,
} from '@core/dto/offset-pagination.dto'
import { RolesEnum } from '@domain/enums'
import {
  CreateBySuperAdminUsecase,
  GetAllUsersUseCase,
  GetOneUserUseCase,
  GetStatisticsUseCase,
} from '@usecases/user'
import { DeleteOneUserUseCase } from '@usecases/user/delete-one-user.usecase'
import { UpdateBySuperAdminUseCase } from '@usecases/user/update-by-super-admin'

import {
  CreateUserV1InputDto,
  CreateUserV1OutputDto,
  DeleteOneUserV1InputDto,
  DeleteOneUserV1OutputDto,
  FindOneUserV1InputDto,
  FindOneUserV1OutputDto,
  UpdateUserV1InputDto,
  UpdateUserV1OutputDto,
  UserMapper,
  UserV1OutputDto,
} from './dto'
import { GetStatisticsV1Output } from './dto/get-statistics.v1.output'

@ApiBearerAuth()
@ApiTags('Users')
@Controller({ path: 'users', version: '1' })
export class UserV1Api {
  constructor(
    private readonly getAllUsersUseCase: GetAllUsersUseCase,
    private readonly getOneUserUseCase: GetOneUserUseCase,
    private readonly deleteOneUserUseCase: DeleteOneUserUseCase,
    private readonly createBySuperAdminUsecase: CreateBySuperAdminUsecase,
    private readonly updateBySuperAdminUseCase: UpdateBySuperAdminUseCase,
    private readonly getStatisticsUseCase: GetStatisticsUseCase,
  ) {}

  @ApiOperation({
    description: 'Get all users stats',
    tags: ['auth'],
  })
  @Get('/statistics')
  @OmitAudit()
  @Roles('ANY')
  @ApiOkResponse({ type: GetStatisticsV1Output })
  async getStatistics(): Promise<GetStatisticsV1Output> {
    return await this.getStatisticsUseCase.execute()
  }

  @ApiOperation({
    description: 'List all users',
    tags: ['auth'],
  })
  @Get('/')
  @OmitAudit()
  @Roles(RolesEnum.SUPER_ADMIN, RolesEnum.ADMIN, RolesEnum.MANAGER)
  @ApiPaginatedResponse(UserV1OutputDto)
  async getAll(
    @Query() paginateOption: OffsetPaginationOptionsDto,
  ): Promise<OffsetPaginationOutputDto<UserV1OutputDto>> {
    const users = await this.getAllUsersUseCase.execute(paginateOption)

    return {
      meta: users.meta,
      data: UserMapper.toList(users.data),
    }
  }

  @ApiOperation({
    description: 'List one user',
    tags: ['auth'],
  })
  @Get('/:id')
  @OmitAudit()
  @Roles(RolesEnum.SUPER_ADMIN, RolesEnum.ADMIN, RolesEnum.MANAGER)
  @ApiOkResponse({ type: FindOneUserV1OutputDto })
  async getOne(
    @Param() params: FindOneUserV1InputDto,
  ): Promise<FindOneUserV1OutputDto> {
    const user = await this.getOneUserUseCase.execute(params)

    return UserMapper.toDto(user)
  }

  @ApiOperation({
    description: 'Create user',
    tags: ['auth'],
  })
  @Post('/')
  @Roles(RolesEnum.SUPER_ADMIN, RolesEnum.ADMIN, RolesEnum.MANAGER)
  @ApiOkResponse({ type: CreateUserV1InputDto })
  async create(
    @Body() body: CreateUserV1InputDto,
  ): Promise<CreateUserV1OutputDto> {
    const user = await this.createBySuperAdminUsecase.execute(body)

    return UserMapper.toDto(user)
  }

  @ApiOperation({
    description: 'Update one user',
    tags: ['auth'],
  })
  @Put('/')
  @Roles(RolesEnum.SUPER_ADMIN, RolesEnum.ADMIN, RolesEnum.MANAGER)
  @ApiOkResponse({ type: UpdateUserV1OutputDto })
  async update(
    @Body() body: UpdateUserV1InputDto,
  ): Promise<UpdateUserV1OutputDto> {
    const user = await this.updateBySuperAdminUseCase.execute(body)

    return UserMapper.toDto(user)
  }

  @ApiOperation({
    description: 'Delete one user',
    tags: ['auth'],
  })
  @Delete('/:id')
  @Roles(RolesEnum.SUPER_ADMIN, RolesEnum.ADMIN, RolesEnum.MANAGER)
  @ApiOkResponse({ type: DeleteOneUserV1OutputDto })
  async delete(
    @Body() body: DeleteOneUserV1InputDto,
  ): Promise<DeleteOneUserV1OutputDto> {
    const isDeleted = await this.deleteOneUserUseCase.execute(body)

    return isDeleted ? { status: 'sucess' } : { status: 'error' }
  }
}
