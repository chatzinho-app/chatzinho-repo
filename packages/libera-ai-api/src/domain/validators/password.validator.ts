import { Injectable, UnauthorizedException } from '@nestjs/common'

import { User } from '@domain/entities/user.entity'
import { compareSync } from 'bcryptjs'

@Injectable()
export class PasswordValidator {
  async validate(password: string, user: User): Promise<boolean> {
    const isValidPassword = compareSync(password, user.password)

    if (!isValidPassword) {
      throw new UnauthorizedException()
    }

    return isValidPassword
  }
}
