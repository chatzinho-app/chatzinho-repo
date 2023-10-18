import { PickType } from '@nestjs/swagger'

import { User } from '@domain/entities'

export class AuthenticateUserDto extends PickType(User, [
  'email',
  'password',
] as const) {
  onlyAdmin?: boolean = false
}
