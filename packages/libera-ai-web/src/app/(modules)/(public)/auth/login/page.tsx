'use client'

import TextField from '@common/components/fields/TextField'
import Button from '@ui/Button'
import Link from 'next/link'
import { FormProvider } from 'react-hook-form'

import useLogin from './hook'

export default function Login() {
  const { form, onSubmit } = useLogin()

  const { isSubmitting, isValid } = form.formState

  return (
    <FormProvider {...form}>
      <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
        <h1 className="header mb-5 text-center">Bem vindo!</h1>
        <TextField
          className="mb-1"
          name="email"
          type="email"
          label="Email"
          placeholder="nome@email.com"
          required
          autoFocus
        />
        <TextField
          className="mb-1"
          name="password"
          type="password"
          label="Senha"
          placeholder="Sua senha"
          required
        />
        <div className="mt-8 w-full">
          <Button type="submit" disabled={!isValid} loading={isSubmitting}>
            Entrar
          </Button>
          <p className="description-text mt-1 text-center text-dark-gray">
            Ainda não tem uma conta?{' '}
            <Link
              href="/auth/register"
              className="text-blue hover:text-dark-blue"
            >
              Registre-se agora
            </Link>
          </p>
        </div>
      </form>
    </FormProvider>
  )
}
