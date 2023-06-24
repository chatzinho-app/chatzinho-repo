import { Injectable } from '@nestjs/common'

import { User } from '@domain/entities'

@Injectable()
export class UserValidator {
  async validate(user: User): Promise<boolean> {
    return !!user
  }
}
