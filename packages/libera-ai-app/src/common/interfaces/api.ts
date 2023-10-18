import { components as ApiTypes } from '@generated/types'

export type RoleType = ApiTypes['schemas']['CreateUserV1InputDto']['role']
export type PartialRoleType = RoleType | undefined

export type StatusType = ApiTypes['schemas']['CreateUserV1InputDto']['status']
export type PartialStatusType = StatusType | undefined
