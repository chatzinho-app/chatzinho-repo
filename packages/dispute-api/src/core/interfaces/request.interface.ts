import { User } from '@domain/entities'
import { Request as Req } from 'express'

export interface Request extends Req {
  user: User
}
