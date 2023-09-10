import {
  BadRequestException,
  ForbiddenException,
  HttpException,
  HttpStatus,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'

import {
  CustomBadRequestException,
  CustomForbiddenException,
  CustomNotFoundRequestException,
  CustomUnauthorizedException,
} from '@core/constants/exceptions.constant'

export enum HttpErrorOrigin {
  ERROR = 'ERROR',
  API_ERROR = 'API_ERROR',
}

export interface HttpDefaultError {
  statusCode: number
  token: string
  error: unknown
}

export const INTERNAL_ERROR_THROWER = (
  location: string,
  err: unknown,
): void => {
  if (
    err instanceof CustomBadRequestException ||
    err instanceof CustomNotFoundRequestException ||
    err instanceof CustomUnauthorizedException ||
    err instanceof CustomForbiddenException ||
    err instanceof BadRequestException ||
    err instanceof NotFoundException ||
    err instanceof UnauthorizedException ||
    err instanceof ForbiddenException
  ) {
    throw err
  }

  console.error(`ERROR: ${location}`, err)
  throw INTERNAL_ERROR(location, err)
}

export const HTTP_ERROR_THROWER = (
  statusCode: number,
  err: unknown,
  type?: HttpErrorOrigin,
): void => {
  if (err instanceof HttpException) {
    throw err
  }
  throw HTTP_ERROR(statusCode, err, type)
}

export const HTTP_ERROR = (
  statusCode: number,
  error: unknown,
  type?: HttpErrorOrigin,
): HttpException =>
  new HttpException(
    {
      statusCode,
      token: type || HttpErrorOrigin.ERROR,
      error,
    } as HttpDefaultError,
    statusCode,
  )

export const INTERNAL_ERROR = (location: string, _: unknown) =>
  new HttpException(
    {
      // message: err,
      location,
      token: 'INTERNAL_ERROR',
    },
    HttpStatus.INTERNAL_SERVER_ERROR,
  )

export const getErrorType = (
  error: unknown,
  type: HttpErrorOrigin,
): boolean => {
  return (
    error instanceof HttpException &&
    (error.getResponse() as HttpDefaultError)?.token === type
  )
}
