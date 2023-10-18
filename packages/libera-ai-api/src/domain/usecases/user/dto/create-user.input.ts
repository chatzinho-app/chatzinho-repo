import { PickType } from '@nestjs/swagger'

import { User } from '@domain/entities'
import { RolesEnum } from '@domain/enums'

export class CreateUserInputDto extends PickType(User, [
  'name',
  'email',
  'cpf',
  'password',
  'status',
  'birthdate',
] as const) {
  role: RolesEnum
}
