import { Inject, Injectable } from '@nestjs/common'

import { AuditService } from '@application/services'
import { CatchError } from '@core/decorators'
import { OffsetPaginationOutputDto } from '@core/dto/offset-pagination.dto'
import { IOffsetPaginationOptionsWithParams } from '@domain/interfaces/offset-paginaton.interface'
import { Audit } from '@domain/schemas/audit.schema'

@Injectable()
export class GetAllAuditsUseCase {
  constructor(
    @Inject(AuditService)
    private auditService: AuditService,
  ) {}

  @CatchError()
  async execute(
    pagination: IOffsetPaginationOptionsWithParams<{
      startDate?: number
      endDate?: number
      userId?: string
      action: string
      project?: string
    }>,
  ): Promise<OffsetPaginationOutputDto<Audit>> {
    return await this.auditService.findAll(pagination)
  }
}
