import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'

import { UserService } from '@application/services/user.service'
import { ExtractJwt, Strategy } from 'passport-jwt'

interface JWTPayload {
  id: string
  name: string
  iat: number
  exp: number
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    })
  }

  async validate(payload: JWTPayload) {
    const user = await this.userService.findOneByIdWithRoles(payload.id)

    if (!user) {
      throw new UnauthorizedException()
    }
    return user
  }
}
