import { Inject, Injectable } from '@nestjs/common'

import { UserService } from '@application/services/user.service'
import { Exceptions } from '@core/constants'
import { CatchError } from '@core/decorators/catch-error.decorator'
import { User } from '@domain/entities'
import { ActivateUserValidator } from '@domain/validators/activate-user.validator'
import { DeepPartial } from 'typeorm'

import { VerifyIndentifierDto } from './dto/verify-indentifier.input'

@Injectable()
export class VerifyIndentifierUseCase {
  constructor(
    @Inject(UserService)
    private userService: UserService,
    private activateUserValidator: ActivateUserValidator,
  ) {}

  @CatchError()
  async execute(input: DeepPartial<VerifyIndentifierDto>): Promise<User> {
    const { cpf } = input

    const foundUser = await this.userService.findOneBy({ cpf })

    if (!foundUser?.id) {
      throw Exceptions.USER_NOT_FOUND
    }

    const isValidUser = this.activateUserValidator.validate(foundUser)

    if (isValidUser) return foundUser
  }
}
