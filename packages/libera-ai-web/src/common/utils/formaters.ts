enum RolesEnum {
  'SUPER_ADMIN' = 'SUPER_ADMIN',
  'ADMIN' = 'ADMIN',
  'MANAGER' = 'MANAGER',
  'DOORMAN' = 'DOORMAN',
  'RESIDENT' = 'RESIDENT',
}

enum UserStatusEnum {
  'ACTIVE' = 'ACTIVE',
  'INACTIVE' = 'INACTIVE',
}

export function formatStatus(status?: UserStatusEnum) {
  if (!status) return

  const conversion = {
    ACTIVE: 'Ativo',
    INACTIVE: 'Inativo',
  }

  return conversion[status]
}

export function formatRole(role?: RolesEnum) {
  if (!role) return

  const conversion = {
    ADMIN: 'Administradora',
    DOORMAN: 'Porteiro',
    MANAGER: 'Síndico',
    RESIDENT: 'Morador',
    SUPER_ADMIN: 'SUPER ADMIN',
  }

  return conversion[role]
}

export function formatCpf(value: string) {
  return value
    ?.replace(/\D/g, '')
    ?.replace(/(\d{3})(\d)/, '$1.$2')
    ?.replace(/(\d{3})(\d)/, '$1.$2')
    ?.replace(/(\d{3})(\d{1,2})/, '$1-$2')
    ?.replace(/(-\d{2})\d+?$/, '$1')
}
