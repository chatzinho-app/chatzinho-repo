import { ApiProperty } from '@nestjs/swagger'

export class DeleteOneUserV1OutputDto {
  /**
   * Status - query status
   * @example 'success'
   */
  @ApiProperty({
    type: String,
    title: 'Status',
    description: 'Query status',
    example: 'success',
  })
  status: string
}
