import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import * as mongoose from 'mongoose'

@Schema({ versionKey: false, collection: 'audit' })
export class Audit {
  _id?: mongoose.Types.ObjectId

  @Prop({ type: mongoose.SchemaTypes.Mixed, required: false })
  requestHeaders: any

  @Prop({ type: mongoose.SchemaTypes.Mixed, required: false })
  requestBody: any

  @Prop({ type: mongoose.SchemaTypes.Mixed, required: false })
  requestParams: any

  @Prop({ type: mongoose.SchemaTypes.Mixed, required: false })
  requestQueryString: any

  @Prop({ type: mongoose.SchemaTypes.Mixed, required: false })
  response: any

  @Prop({ type: String, required: false })
  userId: string

  @Prop({ type: String, required: false })
  userName: string

  @Prop({ type: String, required: true })
  actionName: string

  @Prop({ type: String, required: false })
  actionMethod: string

  @Prop({ type: String, required: false, default: 'manager' })
  project?: string

  @Prop({ type: Number, required: true })
  timestamp?: number

  @Prop({ type: String, required: false })
  ipAddress?: string

  @Prop({ type: String, required: false })
  browser?: string

  @Prop({ type: String, required: false })
  operationSystem?: string
}
export type AuditDocument = Audit & Document

export const AuditSchema = SchemaFactory.createForClass(Audit)
