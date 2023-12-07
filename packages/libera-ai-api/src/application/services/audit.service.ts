import { Injectable, Logger } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { CatchError } from '@core/decorators'
import { OffsetPaginationOutputDto } from '@core/dto/offset-pagination.dto'
import { paginateModelData } from '@core/utils/paginate-model-data.utils'
import { IOffsetPaginationOptionsWithParams } from '@domain/interfaces'
import { Audit } from '@domain/schemas/audit.schema'
import { FilterQuery, Model } from 'mongoose'

export interface ListAuditData {
  offset?: number
  limit?: number
  params?: {
    startDate?: number
    endDate?: number
    userId?: string
    action: string
    project?: string
    skip?: number
    limit?: number
  }
}

@Injectable()
export class AuditService {
  private readonly logger = new Logger(AuditService.name)
  constructor(
    @InjectModel(Audit.name)
    public auditModel: Model<Audit>,
  ) {}

  @CatchError()
  async createOne(data: Audit): Promise<Audit> {
    // eslint-disable-next-line new-cap
    const audit: Audit = new this.auditModel(data)
    audit.timestamp = Date.now()
    return await this.auditModel.create(audit)
  }

  @CatchError()
  async findAll(
    pagination?: IOffsetPaginationOptionsWithParams<{
      startDate?: number
      endDate?: number
      userId?: string
      action?: string
      project?: string
    }>,
  ): Promise<OffsetPaginationOutputDto<Audit>> {
    const params = pagination?.params

    const query: FilterQuery<Audit> = {}

    if (params?.action) {
      query.actionName = { $regex: `.*${params.action}.*` }
    }
    if (params?.userId) {
      query.userId = String(params.userId)
    }

    if (params?.startDate && params?.endDate) {
      query.timestamp = {
        $gte: params.startDate,
        $lte: params.endDate,
      }
    }

    if (params?.project) {
      query.project = {
        $eq: params.project,
      }
    }

    return paginateModelData(
      this.auditModel,
      query,
      pagination.limit || 10,
      pagination.offset || 0,
    )
  }
}
