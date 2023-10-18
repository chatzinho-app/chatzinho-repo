import { Inject, Injectable } from '@nestjs/common'

import { UserService } from '@application/services'
import { Exceptions } from '@core/constants'

@Injectable()
export class EmailValidator {
  constructor(
    @Inject(UserService)
    private userService: UserService,
  ) {}

  async validate(email: string): Promise<boolean> {
    const foundUser = await this.userService.findOneBy({ email })

    if (foundUser?.id) {
      throw Exceptions.EMAIL_ALREADY_EXISTS
    }

    return true
  }
}
