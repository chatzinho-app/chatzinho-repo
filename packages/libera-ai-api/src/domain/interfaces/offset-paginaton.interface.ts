export interface IOffsetPaginationOptions {
  offset?: number
  limit?: number
  search?: string
}

export interface IOffsetPaginationMeta {
  count: number
}

export interface IOffsetPaginationInput<T> {
  params?: T
  paginate?: IOffsetPaginationOptions
}

export interface IOffsetPaginationOutput<T> {
  data?: T[]
  meta?: IOffsetPaginationMeta
}
