import Toast from 'react-native-toast-message'

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
  return Toast.show({
    type: 'success',
    text1: 'Sucesso!',
    text2: message,
  })
}

export function errorToast(message: string) {
  return Toast.show({
    type: 'error',
    text1: 'Erro!',
    text2: message,
  })
}

export function apiErrorToast(error?: {
  message?: string
  token?: ApiErrorMessage
}) {
  const message = getErrorMessageByToken(error?.token) ?? error?.message

  return Toast.show({
    type: 'error',
    text1: 'Erro!',
    text2: message ?? 'Ops, Ocorreu um erro',
  })
}
