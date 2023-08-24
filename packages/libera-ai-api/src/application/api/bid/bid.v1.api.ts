import { Body, Controller, Get, Post } from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'

import { Roles } from '@core/decorators'
import { GetAuthenticatedUser } from '@core/decorators/get-authenticated-user.decorator'
import { User } from '@domain/entities'
import { CreateBidUseCase, GetAllBidsUseCase } from '@usecases/bid'

import { BidMapper, BidV1InputDto, BidV1OutputDto } from './dto'

@ApiBearerAuth()
@ApiTags('Bids')
@Controller({ path: 'bids', version: '1' })
export class BidV1Api {
  constructor(
    private readonly createBidUseCase: CreateBidUseCase,
    private readonly getAllUsersUseCase: GetAllBidsUseCase,
  ) {}

  @ApiOperation({
    description: 'List all bid filtred by dispute',
    tags: ['bids'],
  })
  @Roles('ANY')
  @Get('/dispute/:id')
  async getAllBids(): Promise<BidV1OutputDto[]> {
    const bids = await this.getAllUsersUseCase.execute()
    return BidMapper.toList(bids)
  }

  @ApiOperation({
    description: 'Create new bid',
    tags: ['bids'],
  })
  @Roles('ANY')
  @Post('/')
  async createBid(
    @Body() body: BidV1InputDto,
    @GetAuthenticatedUser() authUser: User,
  ): Promise<BidV1OutputDto> {
    const { disputeId, value } = body

    const bid = await this.createBidUseCase.execute({
      value,
      disputeId,
      ownerId: authUser?.id,
    })

    return BidMapper.toDto(bid)
  }
}
