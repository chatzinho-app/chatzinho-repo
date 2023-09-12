import {
  BadRequestException,
  ForbiddenException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'

export class CustomBadRequestException extends BadRequestException {}
export class CustomNotFoundRequestException extends NotFoundException {}
export class CustomUnauthorizedException extends UnauthorizedException {}
export class CustomForbiddenException extends ForbiddenException {}

export const Exceptions = {
  TOKEN_NOT_PROVIDED: new CustomBadRequestException({
    message: 'Token must be provided for this request',
    token: 'TOKEN_NOT_PROVIDED',
  }),
  INVALID_TOKEN: new CustomBadRequestException({
    message: 'Invalid token',
    token: 'INVALID_TOKEN',
  }),
  USER_NOT_FOUND: new CustomNotFoundRequestException({
    message: 'User not found',
    token: 'USER_NOT_FOUND',
  }),
  USER_ALREADY_ACTIVATED: new CustomNotFoundRequestException({
    message: 'User has already been activated',
    token: 'USER_ALREADY_ACTIVATED',
  }),
  EMAIL_ALREADY_EXISTS: new CustomBadRequestException({
    message: 'Email already exists',
    token: 'EMAIL_ALREADY_EXISTS',
  }),
  EMAIL_OR_PASSWORD_INVALID: new CustomBadRequestException({
    message: 'Email ou senha invalidos',
    token: 'EMAIL_OR_PASSWORD_INVALID',
  }),
  WEEK_PASSWORD: new CustomBadRequestException({
    message:
      'Password must have minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character',
    token: 'WEEK_PASSWORD',
  }),
}
