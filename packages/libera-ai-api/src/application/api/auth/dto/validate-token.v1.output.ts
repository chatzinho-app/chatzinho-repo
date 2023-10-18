import { ApiProperty } from '@nestjs/swagger'

export class ValidateTokenV1Output {
  /**
   * Returns if access token is valid
   * @example 'true'
   */
  @ApiProperty({
    type: Boolean,
    title: 'Validate token',
    description: `Returns if access token is valid`,
    example: 'true',
  })
  isValid: boolean
}
