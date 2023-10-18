import { Inject, Injectable } from '@nestjs/common'

import { RoleService } from '@application/services/role.service'
import { UserService } from '@application/services/user.service'
import { Exceptions } from '@core/constants'
import { CatchError } from '@core/decorators'
import { User } from '@domain/entities/user.entity'

import { UpdateUserInputDto } from './dto/update-user.input'

@Injectable()
export class UpdateBySuperAdminUseCase {
  constructor(
    @Inject(UserService)
    private userService: UserService,
    @Inject(RoleService)
    private roleService: RoleService,
  ) {}

  @CatchError()
  async execute(dtoUser: UpdateUserInputDto): Promise<User> {
    const foundUser = await this.userService.findOneByIdWithRoles(dtoUser.id)

    if (!foundUser) {
      throw Exceptions.USER_NOT_FOUND
    }

    const foundRole = await this.roleService.findOneBy({ name: dtoUser.role })

    if (!foundRole) {
      throw Exceptions.USER_NOT_FOUND
    }

    const roles =
      dtoUser.role &&
      foundUser.roles.map((role) => role.name).includes(dtoUser.role)
        ? foundUser.roles
        : [foundRole]

    delete dtoUser.role

    const user: Partial<User> = {
      ...dtoUser,
      roles: roles ?? foundUser.roles,
    }

    return await this.userService.update({ id: foundUser.id }, user)
  }
}
