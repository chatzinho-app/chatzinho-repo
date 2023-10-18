import { PickType } from '@nestjs/swagger'

import { UserDto } from '@core/dto/user.dto'

export class DeleteOneUserV1InputDto extends PickType(UserDto, [
  'id',
] as const) {}
