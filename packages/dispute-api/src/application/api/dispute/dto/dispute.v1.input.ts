import { PickType } from '@nestjs/swagger'

import { DisputeDto } from '@core/dto/dispute.dto'

export class DisputeV1InputDto extends PickType(DisputeDto, [
  'referenceValue',
  'valueBetweenBids',
] as const) {}
