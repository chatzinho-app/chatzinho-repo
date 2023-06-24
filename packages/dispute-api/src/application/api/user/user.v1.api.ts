import { Controller, Get } from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'

import { Roles } from '@core/decorators'
import { GetAuthenticatedUser } from '@core/decorators/get-authenticated-user.decorator'
import { User } from '@domain/entities'
import { RolesEnum } from '@domain/enums'
import { GetAllUsersUseCase } from '@usecases/user'

import { UserMapper, UserV1OutputDto } from './dto'

@ApiBearerAuth()
@ApiTags('Users')
@Controller({ path: 'users', version: '1' })
export class UserV1Api {
  constructor(private readonly getAllUsersUseCase: GetAllUsersUseCase) {}

  @ApiOperation({
    description: 'List all users',
    tags: ['auth'],
  })
  @Roles(RolesEnum.ADMIN, RolesEnum.SUPER_ADMIN)
  @Get('/')
  async getAll(
    @GetAuthenticatedUser() authUser: User,
  ): Promise<UserV1OutputDto[]> {
    console.log('USER: ', authUser)

    const users = await this.getAllUsersUseCase.execute()
    return UserMapper.toList(users)
  }
}
