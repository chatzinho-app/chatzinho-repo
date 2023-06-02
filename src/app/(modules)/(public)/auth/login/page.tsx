'use client'

import TextField from '@common/components/fields/TextField'
import { zodResolver } from '@hookform/resolvers/zod'
import Button from '@ui/Button'
import Card from '@ui/Card'
import { useForm } from 'react-hook-form'

import { LoginFormValues, LoginSchema } from './schema'

export default function Login() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(LoginSchema),
    mode: 'onTouched',
  })

  const { isSubmitting, isValid } = form.formState

  function onSubmit(values: LoginFormValues) {
    console.log('LOGIN VALUES: ', values)
  }

  return (
    <Card className="max-w-[25vw] flex-col justify-between">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <h1 className="header mb-5 text-center">Bem vindo!</h1>
        <TextField
          className="mb-1"
          control={form.control}
          name="email"
          type="email"
          label="Email"
          placeholder="nome@email.com"
          required
          autoFocus
        />
        <TextField
          className="mb-1"
          control={form.control}
          name="password"
          type="password"
          label="Senha"
          placeholder="Sua senha"
          required
        />
      </form>
      <div className="w-full">
        <Button type="submit" disabled={!isValid} loading={isSubmitting}>
          Entrar
        </Button>
        <p>Ainda não tem uma conta? Registre-se agora</p>
      </div>
    </Card>
  )
}
