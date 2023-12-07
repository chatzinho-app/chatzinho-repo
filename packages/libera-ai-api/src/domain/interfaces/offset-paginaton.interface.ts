export interface IOffsetPaginationOptions {
  offset?: number
  limit?: number
  search?: string
}

export interface IOffsetPaginationOptionsWithParams<T> {
  offset?: number
  limit?: number
  params?: T
}

export interface IOffsetPaginationMeta {
  count: number
  offset?: number
}

export interface IOffsetPaginationInput<T> {
  params?: T
  paginate?: IOffsetPaginationOptions
}

export interface IOffsetPaginationOutput<T> {
  data?: T[]
  meta?: IOffsetPaginationMeta
}
