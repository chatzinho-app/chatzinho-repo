import { PickType } from '@nestjs/swagger'

import { LoginV1Output } from './login.v1.output'

export class ValidateTokenV1Input extends PickType(LoginV1Output, [
  'token',
] as const) {}
