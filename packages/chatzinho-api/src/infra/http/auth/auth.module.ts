import { forwardRef, Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

import { ApplicationModule } from '@application/application.module'

import { JwtStrategy } from './jwt.strategy'
import { JwtAuthGuard } from './jwt-auth.guard'

@Module({
  imports: [
    forwardRef(() => ApplicationModule),
    PassportModule,
    JwtModule.registerAsync({
      imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: {
          expiresIn: '20h',
        },
      }),
    }),
  ],
  providers: [JwtStrategy, JwtModule, JwtAuthGuard],
  exports: [JwtStrategy, JwtModule, JwtAuthGuard],
})
export class AuthModule {}
