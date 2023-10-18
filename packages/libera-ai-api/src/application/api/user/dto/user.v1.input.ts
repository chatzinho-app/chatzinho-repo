import { ApiProperty, PickType } from '@nestjs/swagger'

import { UserDto } from '@core/dto/user.dto'

export class UserV1InputDto extends PickType(UserDto, [
  'name',
  'email',
  'cpf',
  'birthdate',
] as const) {
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
