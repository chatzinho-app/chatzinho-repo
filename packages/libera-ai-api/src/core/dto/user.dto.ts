import { ApiProperty } from '@nestjs/swagger'

import { RolesEnum, UserStatusEnum } from '@domain/enums'

import { BaseDto } from './base.dto'

export class UserDto extends BaseDto {
  /**
   * User name
   * @example 'Example User'
   */
  @ApiProperty({
    type: String,
    title: 'User name',
    example: 'Example User',
    minLength: 5,
  })
  name: string

  /**
   * User email - This property must be unique
   * @example 'example@email.com'
   */
  @ApiProperty({
    type: String,
    title: 'Email',
    description: 'This property must be unique',
    example: 'example@email.com',
    minLength: 5,
    uniqueItems: true,
  })
  email: string

  /**
   * User document - Brazilian CPF
   * @example '00000000000'
   */
  @ApiProperty({
    type: String,
    title: 'Document',
    description: 'Brazilian CPF',
    example: '00000000000',
    minLength: 11,
    maxLength: 11,
    uniqueItems: true,
  })
  cpf: string

  /**
   * User status - Property to know if the user's enabled
   * @example 'ACTIVE'
   */
  @ApiProperty({
    type: UserStatusEnum,
    enum: UserStatusEnum,
    title: 'User status',
    description: `Property to know if the user's enabled`,
    example: UserStatusEnum.ACTIVE,
    default: UserStatusEnum.INACTIVE,
  })
  status: UserStatusEnum

  /**
   * User roles - A list of user's roles
   * @example ['ADMIN']
   */
  @ApiProperty({
    type: Array<RolesEnum>,
    title: 'User roles',
    description: `A list of user's roles`,
    example: ['ADMIN'],
    isArray: true,
  })
  roles?: RolesEnum[]
}
