import { ApiProperty } from '@nestjs/swagger'

export class LoginV1Output {
  /**
   * Access token
   * @example 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0N...'
   */
  @ApiProperty({
    type: String,
    title: 'Access token',
    description: 'This string must be used to access the application',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0N...',
  })
  token: string
}
