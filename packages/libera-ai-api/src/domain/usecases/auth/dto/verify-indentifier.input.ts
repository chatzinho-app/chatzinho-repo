import { PickType } from '@nestjs/swagger'

import { User } from '@domain/entities'

export class VerifyIndentifierDto extends PickType(User, ['cpf'] as const) {}
