import { PickType } from '@nestjs/swagger'

import { User } from '@domain/entities'

export class FindUserInputDto extends PickType(User, ['id'] as const) {}
