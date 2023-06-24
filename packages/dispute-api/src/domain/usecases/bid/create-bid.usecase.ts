import { Inject, Injectable } from '@nestjs/common'

import { BidService } from '@application/services/bid.service'
import { DisputeService } from '@application/services/dispute.service'
import { UserService } from '@application/services/user.service'
import { Bid } from '@domain/entities'
import { BidValidator } from '@domain/validators/bid.validator'
import { DisputeValidator } from '@domain/validators/dispute.validator'
import { UserValidator } from '@domain/validators/user.validator'

import { CreateBidDto } from './dto/create-bid.input'

@Injectable()
export class CreateBidUseCase {
  constructor(
    @Inject(BidService)
    private bidService: BidService,
    @Inject(UserService)
    private userService: UserService,
    @Inject(DisputeService)
    private disputeService: DisputeService,

    @Inject(BidValidator)
    private bidValidator: BidValidator,
    @Inject(UserValidator)
    private userValidator: UserValidator,
    @Inject(DisputeValidator)
    private disputeValidator: DisputeValidator,
  ) {}

  async execute(input: CreateBidDto): Promise<Bid> {
    const { disputeId, ownerId, value } = input

    const owner = await this.userService.findOneBy({ id: ownerId })
    this.userValidator.validate(owner)

    const dispute = await this.disputeService.findOneBy({ id: disputeId })
    this.disputeValidator.validate(dispute)

    const bid = new Bid(owner, value, dispute)
    this.bidValidator.validate(bid)

    return await this.bidService.save(bid)
  }
}
