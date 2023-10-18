import { Injectable } from '@nestjs/common'

import { Exceptions } from '@core/constants'
import { User } from '@domain/entities'
import { UserStatusEnum } from '@domain/enums'

@Injectable()
export class ActivateUserValidator {
  async validate(user: User): Promise<boolean> {
    if (!user?.id) {
      throw Exceptions.USER_NOT_FOUND
    }

    if (user.status === UserStatusEnum.ACTIVE) {
      throw Exceptions.USER_ALREADY_ACTIVATED
    }

    return true
  }
}
