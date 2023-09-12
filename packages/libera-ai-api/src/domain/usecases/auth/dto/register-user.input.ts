import { PickType } from '@nestjs/swagger'

import { User } from '@domain/entities'

export class RegisterUserInputDto extends PickType(User, [
  'email',
  'cpf',
  'password',
] as const) {}
