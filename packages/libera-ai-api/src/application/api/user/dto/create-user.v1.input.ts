import { ApiProperty, PickType } from '@nestjs/swagger'

import { UserDto } from '@core/dto/user.dto'
import { RolesEnum } from '@domain/enums'

export class CreateUserV1InputDto extends PickType(UserDto, [
  'name',
  'email',
  'cpf',
  'status',
  'birthdate',
] as const) {
  /**
   * User roles - A list of user's roles
   * @example 'ADMIN'
   */
  @ApiProperty({
    enum: RolesEnum,
    title: 'User role',
    description: `User's roles`,
    example: RolesEnum.ADMIN,
  })
  role: RolesEnum

  /**
   * User password - This property will be encrypted in the database
   * @example '123456'
   */
  @ApiProperty({
    type: String,
    title: 'Password',
    description:
      'This property will be used to authenticate the user and will be encrypted in the database.',
    example: '123456',
    minLength: 6,
  })
  password: string
}
