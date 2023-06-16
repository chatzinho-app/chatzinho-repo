import { Bid } from '@domain/entities/bid.entity'
import { Role } from '@domain/entities/role.entity'
import { UserStatus } from '@domain/enums/user-status.enum'

export default class UserV1OutputDto {
  id: string
  name: string
  email: string
  cpf: string
  status: UserStatus
  bids?: Bid[]
  roles?: Role[]
}
