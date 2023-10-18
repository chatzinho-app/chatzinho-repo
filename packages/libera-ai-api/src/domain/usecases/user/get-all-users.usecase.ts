import { Inject, Injectable } from '@nestjs/common'

import { UserService } from '@application/services/user.service'
import { CatchError } from '@core/decorators'
import { OffsetPaginationOutputDto } from '@core/dto/offset-pagination.dto'
import { User } from '@domain/entities/user.entity'
import { IOffsetPaginationOptions } from '@domain/interfaces/offset-paginaton.interface'

@Injectable()
export class GetAllUsersUseCase {
  constructor(
    @Inject(UserService)
    private userService: UserService,
  ) {}

  @CatchError()
  async execute(
    pagination: IOffsetPaginationOptions,
  ): Promise<OffsetPaginationOutputDto<User>> {
    return await this.userService.findAll(pagination)
  }
}
