import { Injectable } from '@nestjs/common'

import { Exceptions } from '@core/constants/exceptions.constant'
import { User } from '@domain/entities/user.entity'
import { compare } from 'bcryptjs'

@Injectable()
export class PasswordValidator {
  validate(password: string): boolean {
    const passwordPatternValidation =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    const isValidPassword = passwordPatternValidation.test(password)

    if (!isValidPassword) {
      throw Exceptions.WEEK_PASSWORD
    }

    return isValidPassword
  }

  async compare(password: string, user: User): Promise<boolean> {
    const isValidPassword = await compare(password, user.password)

    if (!isValidPassword) {
      throw Exceptions.EMAIL_OR_PASSWORD_INVALID
    }

    return isValidPassword
  }
}
