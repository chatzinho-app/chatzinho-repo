'use client'

import TextField from '@common/components/fields/TextField'
import Button from '@ui/Button'
import Link from 'next/link'
import { FormProvider } from 'react-hook-form'

import Header from '../components/Header'
import useLogin from './hook'

export default function Login() {
  const { form, onSubmit } = useLogin()

  const { isSubmitting, isValid } = form.formState

  return (
    <FormProvider {...form}>
      <Header
        title="Login"
        subtitle="Informe seu e-mail e senha para entrar na sua conta"
      />

      <section className="flex w-full flex-1 flex-col items-center px-6 pb-2 pt-4">
        <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
          <TextField
            className="mb-1"
            name="email"
            type="email"
            label="Email"
            placeholder="ex: email@mail.com"
            required
            autoFocus
          />
          <TextField
            name="password"
            type="password"
            label="Senha"
            placeholder="Informe uma senha"
            required
          />
          <p className="description-text text-right">
            <Link href="#" className=" text-primary hover:text-secondary">
              Esqueci minha senha
            </Link>
          </p>
          <div className="mt-8 w-full">
            <Button type="submit" disabled={!isValid} loading={isSubmitting}>
              Entrar
            </Button>
            <p className="description-text mt-1 text-center text-white">
              Ainda não tem uma conta?{' '}
              <Link href="#" className="text-primary hover:text-secondary">
                Registre-se agora
              </Link>
            </p>
          </div>
        </form>
      </section>
    </FormProvider>
  )
}
