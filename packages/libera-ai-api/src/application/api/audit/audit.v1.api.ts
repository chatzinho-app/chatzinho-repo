import { Controller, Get, Query } from '@nestjs/common'
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
import { GetAllAuditsUseCase, GetAuditStatisticsUseCase } from '@usecases/audit'

import { AuditV1OutputDto } from './dto/audit.v1.output'
import { GetStatisticsV1Output } from './dto/get-statistics.v1.output'

@ApiBearerAuth()
@ApiTags('Audit')
@Controller({ path: 'audits', version: '1' })
export class AuditV1Api {
  constructor(
    private readonly getAllAuditsUseCase: GetAllAuditsUseCase,
    private readonly getAuditStatisticsUseCase: GetAuditStatisticsUseCase,
  ) {}

  @ApiOperation({
    description: 'Get all audits stats',
    tags: ['auth'],
  })
  @Get('/statistics')
  @Roles(RolesEnum.SUPER_ADMIN, RolesEnum.ADMIN, RolesEnum.MANAGER)
  @OmitAudit()
  @ApiOkResponse({ type: GetStatisticsV1Output })
  async getStatistics(): Promise<GetStatisticsV1Output> {
    return await this.getAuditStatisticsUseCase.execute()
  }

  @ApiOperation({
    description: 'List audits',
    tags: ['auth'],
  })
  @Get('/')
  @OmitAudit()
  @Roles(RolesEnum.SUPER_ADMIN, RolesEnum.ADMIN, RolesEnum.MANAGER)
  @ApiPaginatedResponse(AuditV1OutputDto)
  async getAll(
    @Query() paginateOption: OffsetPaginationOptionsDto,
  ): Promise<OffsetPaginationOutputDto<AuditV1OutputDto>> {
    const audits = await this.getAllAuditsUseCase.execute({
      limit: paginateOption.limit,
      offset: paginateOption.offset,
      params: {
        action: paginateOption.search,
      },
    })

    return {
      meta: audits.meta,
      data: audits.data,
    }
  }
}
