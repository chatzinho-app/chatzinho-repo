import { PickType } from '@nestjs/swagger'

import { UserDto } from '@core/dto/user.dto'

export class VerifyV1Input extends PickType(UserDto, ['cpf'] as const) {}
