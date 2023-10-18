import { Inject, Injectable } from '@nestjs/common'

import { UserService } from '@application/services/user.service'
import { Exceptions } from '@core/constants'
import { CatchError } from '@core/decorators'

import { FindUserInputDto } from './dto/find-user.input'

@Injectable()
export class DeleteOneUserUseCase {
  constructor(
    @Inject(UserService)
    private userService: UserService,
  ) {}

  @CatchError()
  async execute(input: FindUserInputDto): Promise<boolean> {
    const foundUser = await this.userService.findOneByIdWithRoles(input.id)

    if (!foundUser) {
      throw Exceptions.USER_NOT_FOUND
    }

    const deletedUser = await this.userService.deleteOne({ id: foundUser.id })

    return deletedUser.affected > 0
  }
}
