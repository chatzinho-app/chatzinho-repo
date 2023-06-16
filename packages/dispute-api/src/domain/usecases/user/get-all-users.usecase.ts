import { Inject, Injectable } from '@nestjs/common'

import { UserService } from '@application/services/user.service'
import { User } from '@domain/entities/user.entity'

@Injectable()
export default class GetAllUsersUseCase {
  constructor(
    @Inject(UserService)
    private userService: UserService,
  ) {}

  async execute(): Promise<User[]> {
    return await this.userService.findAll()
  }
}
