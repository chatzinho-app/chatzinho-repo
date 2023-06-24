import { DisputeMapper } from '@application/api/dispute/dto'
import { UserMapper } from '@application/api/user/dto'
import { Bid } from '@domain/entities'

import { BidV1OutputDto } from './bid.v1.output'

export class BidMapper {
  public static toDto(bid: Bid): BidV1OutputDto {
    return {
      id: bid.id,
      value: bid.value,
      owner: UserMapper.toDto(bid.owner),
      dispute: DisputeMapper.toDto(bid?.dispute),
      createdAt: bid.createdAt,
      updatedAt: bid.updatedAt,
    }
  }

  public static toList(bids: Bid[]): BidV1OutputDto[] {
    return bids.map(this.toDto)
  }

  // public static toEntity(environmentInputV1Dto: BidV1InputDto): Bid {
  //   return new Bid(
  //     environmentInputV1Dto.owner,
  //     environmentInputV1Dto.value,
  //     environmentInputV1Dto.dispute,
  //   )
  // }
}
