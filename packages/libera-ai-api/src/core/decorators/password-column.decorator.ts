import { hashSync } from 'bcryptjs'
import { ColumnOptions, getMetadataArgsStorage } from 'typeorm'
import { ColumnMetadataArgs } from 'typeorm/metadata-args/ColumnMetadataArgs'

// eslint-disable-next-line @typescript-eslint/ban-types
export function PasswordColumn(options?: ColumnOptions): Function {
  if (!options) options = {} as ColumnOptions

  options.type = 'varchar'
  options.transformer = {
    to(password: string): string {
      if (password) {
        const SALT_FACTOR = 10
        const hash = hashSync(password, SALT_FACTOR)
        return hash
      }
    },
    from(hash: string): string {
      if (hash) return hash
    },
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (object: Record<any, any>, propertyName: string) {
    getMetadataArgsStorage().columns.push({
      target: object.constructor,
      propertyName,
      mode: 'regular',
      options: options || {},
    } as ColumnMetadataArgs)
  }
}
