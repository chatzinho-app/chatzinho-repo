import { PickType } from '@nestjs/swagger'

import { UserDto } from '@core/dto/user.dto'

export class FindOneUserV1InputDto extends PickType(UserDto, ['id'] as const) {}
