import { Inject, Injectable } from '@nestjs/common'

import { UserService } from '@application/services'
import { Exceptions } from '@core/constants'
import { User } from '@domain/entities'
import { DeepPartial } from 'typeorm'

@Injectable()
export class UserValidator {
  constructor(
    @Inject(UserService)
    private userService: UserService,
  ) {}

  async validate(user: User): Promise<boolean> {
    return !!user
  }

  async exists(user: DeepPartial<User>): Promise<boolean> {
    const foundUser = await this.userService.findOneBy([
      { email: user?.email },
      { cpf: user?.cpf },
    ])

    if (!foundUser?.id) throw Exceptions.USER_NOT_FOUND

    return true
  }
}
