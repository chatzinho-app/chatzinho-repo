import { Inject, Injectable } from '@nestjs/common'

import { UserService } from '@application/services/user.service'
import { CatchError } from '@core/decorators'

import { StatisticsOutput } from './dto/statistics.output'

@Injectable()
export class GetStatisticsUseCase {
  constructor(
    @Inject(UserService)
    private userService: UserService,
  ) {}

  @CatchError()
  async execute(): Promise<StatisticsOutput> {
    return await this.userService.statistics()
  }
}
