import { ApiProperty } from '@nestjs/swagger'

export abstract class BaseDto {
  /**
   * Generated identifier
   * @example '1d01eb3c-0cb8-11ee-be56-0242ac120002'
   */
  @ApiProperty({
    type: String,
    description: `UUID Identifier`,
    example: '1d01eb3c-0cb8-11ee-be56-0242ac120002',
    uniqueItems: true,
  })
  id: string

  /**
   * Date the record was created in the database
   * @example '2023-06-17T02:39:30.901Z'
   */
  @ApiProperty({
    type: Date,
    description: `Date the record was created in the database`,
    example: '2023-06-17T02:39:30.901Z',
  })
  createdAt: Date

  /**
   * Date of the last change of the record in the database
   * @example '2023-06-17T02:39:30.901Z'
   */
  @ApiProperty({
    type: Date,
    description: `Date of the last change of the record in the database`,
    example: '2023-06-17T02:39:30.901Z',
    nullable: true,
  })
  updatedAt?: Date
}
