import { Controller, Get } from '@nestjs/common'

import GetAllUsersUseCase from '@usecases/user/get-all-users.usecase'

import { UserMapper } from './dto/user.mapper'
import UserV1OutputDto from './dto/user.v1.output'

@Controller({ path: 'users', version: '1' })
export class UserV1Api {
  constructor(private readonly getAllUsersUseCase: GetAllUsersUseCase) {}

  @Get()
  async getAll(): Promise<UserV1OutputDto[]> {
    const environments = await this.getAllUsersUseCase.execute()
    return UserMapper.toList(environments)
  }
}
