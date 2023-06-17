import { ApiProperty, PickType } from '@nestjs/swagger'

import { UserDto } from '@core/dto/user.dto'

export class RegisterV1Input extends PickType(UserDto, [
  'email',
  'name',
  'cpf',
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
