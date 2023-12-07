import { SetMetadata } from '@nestjs/common'

export const OmitAudit = () => SetMetadata('omitAudit', true)
