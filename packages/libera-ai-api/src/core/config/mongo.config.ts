import { registerAs } from '@nestjs/config'

import { validateSchema } from '@core/utils/config.utils'
import * as Joi from 'joi'

const schema = Joi.object({
  uri: Joi.string().required(),
  dbName: Joi.string().required(),
  dbUsername: Joi.string().required(),
  dbPassword: Joi.string().required(),
})

export default registerAs('mongo', () => {
  return validateSchema(schema, {
    uri: process.env.MONGO_URI,
    dbName: process.env.MONGO_DB_NAME,
    dbUsername: process.env.MONGO_DB_USERNAME,
    dbPassword: process.env.MONGO_DB_PASSWORD,
  })
})

// MongooseModule.forRoot(process.env.DATABASE_URI, {
//   dbName: process.env.DATABASE_NAME,
//   auth: {
//     username: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASS,
//   },
// }),
