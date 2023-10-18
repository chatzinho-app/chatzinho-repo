import { Inject, Injectable } from '@nestjs/common'

import { UserService } from '@application/services'
import { Exceptions } from '@core/constants'

@Injectable()
export class CpfValidator {
  constructor(
    @Inject(UserService)
    private userService: UserService,
  ) {}

  async validate(cpf: string): Promise<boolean> {
    const foundUser = await this.userService.findOneBy({ cpf })

    if (foundUser?.id) {
      throw Exceptions.CPF_ALREADY_EXISTS
    }

    return true
  }
}
