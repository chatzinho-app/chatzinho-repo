import { toast } from 'react-toastify'

import { ApiErrorMessage } from '@/@types/errors'

function getErrorMessageByToken(token?: ApiErrorMessage) {
  if (!token) return

  const convertion = {
    INVALID_CREDENTIALS: 'Credenciais invalidas',
    FORBIDDEN_RESOURCE: 'Acesso negado',
    TOKEN_NOT_PROVIDED: 'Token de acesso não foi fornecido',
    INVALID_TOKEN: 'Sessão invalida',
    USER_NOT_FOUND: 'Usuário não encontrado',
    USER_ALREADY_ACTIVATED: 'Usuário já foi ativado',
    EMAIL_ALREADY_EXISTS: 'Email já cadastrado',
    CPF_ALREADY_EXISTS: 'CPF já cadastrado',
    EMAIL_OR_PASSWORD_INVALID: 'Email e/ou senha inválido(s)',
    WEEK_PASSWORD: 'Senha fraca',
    UNAUTHORIZED_LOGIN: 'Esse tipo de conta não pode fazer login na aplicação',
  }

  return convertion?.[token]
}

export function successToast(message: string) {
  return toast.success(message, {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'light',
  })
}

export function errorToast(message: string) {
  return toast.error(message, {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'light',
  })
}

export function apiErrorToast(error?: {
  message?: string
  token?: ApiErrorMessage
}) {
  const message = getErrorMessageByToken(error?.token) ?? error?.message

  return toast.error(message ?? 'Ops, Ocorreu um erro', {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'light',
  })
}
