import { ApiProperty } from '@nestjs/swagger'

export class AuditDto {
  /**
   * User name
   * @example 'Example User'
   */
  @ApiProperty({
    title: 'requestHeaders',
    example: 'Example User',
    // minLength: 5,
  })
  requestHeaders: any
}
