import { Inject, Injectable } from '@nestjs/common'

import { AuditService } from '@application/services'
import { CatchError } from '@core/decorators'

import { AuditStatisticsOutput } from './dto/audit-statistics.output'

@Injectable()
export class GetAuditStatisticsUseCase {
  constructor(
    @Inject(AuditService)
    private auditService: AuditService,
  ) {}

  @CatchError()
  async execute(): Promise<AuditStatisticsOutput> {
    const audits = await this.auditService.findAll()

    return {
      count: audits.meta.count,
    }
  }
}
