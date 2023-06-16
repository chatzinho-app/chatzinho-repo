import { CustomDecorator, SetMetadata } from '@nestjs/common'

import { RolesEnum } from '@domain/enums/roles.enum'

export const ROLES_KEY = 'roles'
export const Roles = (
  ...roles: (RolesEnum | 'ANY')[]
): CustomDecorator<string> => SetMetadata(ROLES_KEY, roles)
