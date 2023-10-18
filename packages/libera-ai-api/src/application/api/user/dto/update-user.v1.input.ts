import { PartialType } from '@nestjs/swagger'

import { CreateUserV1InputDto } from './create-user.v1.input'

export class UpdateUserV1InputDto extends PartialType(CreateUserV1InputDto) {
  id: string
}
