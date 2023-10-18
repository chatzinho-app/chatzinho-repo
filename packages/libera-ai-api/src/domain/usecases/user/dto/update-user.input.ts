import { PartialType } from '@nestjs/swagger'

import { CreateUserInputDto } from './create-user.input'

export class UpdateUserInputDto extends PartialType(CreateUserInputDto) {
  id: string
}
