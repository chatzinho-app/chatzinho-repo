import { Controller, Get } from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'

import { GetAllUsersUseCase } from '@usecases/user'

import { UserMapper, UserV1OutputDto } from './dto'

@ApiTags('Users')
@Controller({ path: 'users', version: '1' })
export class UserV1Api {
  constructor(private readonly getAllUsersUseCase: GetAllUsersUseCase) {}

  @Get()
  @ApiOkResponse()
  async getAll(): Promise<UserV1OutputDto[]> {
    const environments = await this.getAllUsersUseCase.execute()
    return UserMapper.toList(environments)
  }
}
