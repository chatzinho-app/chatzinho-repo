import { Route } from '@common/interfaces'

const ADMIN_BASE__PATH = '/admin'

export const adminRoutes: Array<Route> = [
  {
    label: 'Dashboard',
    href: `${ADMIN_BASE__PATH}/dashboard`,
  },
  {
    label: 'Usuários',
    href: `${ADMIN_BASE__PATH}/users`,
  },
  {
    label: 'Requisições',
    href: `${ADMIN_BASE__PATH}/audits`,
  },
]
