import { ApiProperty } from '@nestjs/swagger'

export class GetStatisticsV1Output {
  /**
   * Count Object
   */
  @ApiProperty({
    type: Number,
    title: 'Count object',
  })
  count: number
}
