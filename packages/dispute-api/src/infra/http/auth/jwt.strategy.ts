import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'

import { UserService } from '@application/services/user.service'
import { User } from '@domain/entities/user.entity'
import { ExtractJwt, Strategy } from 'passport-jwt'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    })
  }

  async validate(payload: { sub: User['id']; email: string }) {
    console.log('PAYLOAD: ', payload)

    const user = await this.userService.findOneByIdWithRoles(payload.sub)
    console.log({ user })
    if (!user) {
      throw new UnauthorizedException()
    }
    return user
  }
}
