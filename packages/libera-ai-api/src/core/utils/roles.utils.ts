import { Role } from '@domain/entities'
import { RolesEnum } from '@domain/enums'

export function includesRole(roles: Role[] = [], rolesName: RolesEnum[] = []) {
  if (roles.length === 0 || roles.length === 0) return false

  return rolesName.some((roleName) =>
    roles.map((role) => role.name).includes(roleName),
  )
}
