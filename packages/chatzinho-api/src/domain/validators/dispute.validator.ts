import { Injectable } from '@nestjs/common'

import { Dispute } from '@domain/entities'

@Injectable()
export class DisputeValidator {
  async validate(dispute: Dispute): Promise<boolean> {
    return !!dispute
  }
}
