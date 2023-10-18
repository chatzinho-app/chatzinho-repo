import { ApiProperty } from '@nestjs/swagger'

class StatisticsCount {
  /**
   * Residents count
   * @example 5
   */
  @ApiProperty({
    type: Number,
    title: 'Resident Count',
    example: 5,
  })
  resident: number

  /**
   * Doorman count
   * @example 5
   */
  @ApiProperty({
    type: Number,
    title: 'Doorman Count',
    example: 5,
  })
  doorman: number

  /**
   * Admins count
   * @example 5
   */
  @ApiProperty({
    type: Number,
    title: 'Admin Count',
    example: 5,
  })
  admin: number
}

export class GetStatisticsV1Output {
  /**
   * Count Object
   */
  @ApiProperty({
    type: StatisticsCount,
    title: 'Count object',
  })
  count: StatisticsCount
}
