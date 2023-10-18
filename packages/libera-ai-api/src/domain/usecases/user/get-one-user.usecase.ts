import { Inject, Injectable } from '@nestjs/common'

import { UserService } from '@application/services/user.service'
import { Exceptions } from '@core/constants'
import { CatchError } from '@core/decorators'
import { User } from '@domain/entities/user.entity'

import { FindUserInputDto } from './dto/find-user.input'

@Injectable()
export class GetOneUserUseCase {
  constructor(
    @Inject(UserService)
    private userService: UserService,
  ) {}

  @CatchError()
  async execute(input: FindUserInputDto): Promise<User> {
    const foundUser = await this.userService.findOneByIdWithRoles(input.id)

    if (!foundUser) {
      throw Exceptions.USER_NOT_FOUND
    }

    return foundUser
  }
}
