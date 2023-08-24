import { BidMapper } from '@application/api/bid/dto'
import { Dispute } from '@domain/entities'

import { DisputeV1OutputDto } from './dispute.v1.output'

export class DisputeMapper {
  public static toDto(dispute: Dispute): DisputeV1OutputDto {
    return {
      id: dispute.id,
      code: dispute.code,
      status: dispute.status,
      referenceValue: dispute.referenceValue,
      valueBetweenBids: dispute.valueBetweenBids,
      winner: dispute?.winner,
      bids: BidMapper.toList(dispute.bids),
      createdAt: dispute.createdAt,
      updatedAt: dispute.updatedAt,
    }
  }

  public static toList(disputes: Dispute[]): DisputeV1OutputDto[] {
    return disputes.map(this.toDto)
  }

  // public static toEntity(disputeV1InputDto: DisputeV1InputDto): Dispute {
  //   return new Dispute(
  //     environmentInputV1Dto.name,
  //     environmentInputV1Dto.email,
  //     environmentInputV1Dto.password,
  //     environmentInputV1Dto.cpf,
  //     UserStatusEnum.INACTIVE,
  //   )
  // }
}
