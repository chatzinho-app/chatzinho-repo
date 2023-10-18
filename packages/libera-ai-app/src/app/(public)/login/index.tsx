import { FormProvider } from 'react-hook-form'
import { Platform, View } from 'react-native'

import { Link } from 'expo-router'

import { AuthContainer } from '@components/AuthContainer'
import TextField from '@components/fields/TextField'
import Button from '@ui/Button'
import { Text } from '@ui/Text'

import useLogin from './hook'

export default function Login() {
  const { form, onSubmit } = useLogin()

  const { isSubmitting, isValid } = form.formState

  return (
    <AuthContainer
      title="Login"
      subtitle="Informe seu e-mail e senha para entrar na sua conta"
      color="primary"
    >
      <FormProvider {...form}>
        <TextField
          name="email"
          label="E-mail"
          placeholder="ex: email@mail.com"
          required
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect
          enterKeyHint="next"
          inputMode="email"
          keyboardType="default"
        />
        <TextField
          name="password"
          label="Senha"
          placeholder="Informe sua senha"
          required
          type="password"
          autoCapitalize="none"
          autoComplete="password"
          autoCorrect={false}
          enterKeyHint="enter"
          inputMode="text"
          keyboardType={
            Platform.OS === 'android'
              ? 'visible-password'
              : 'numbers-and-punctuation'
          }
        />
      </FormProvider>
      <View className="flex-1 justify-end">
        <Button
          disabled={!isValid}
          loading={isSubmitting}
          onPress={form.handleSubmit(onSubmit)}
        >
          Próximo
        </Button>
        <View className="flex flex-row items-center justify-center my-1">
          <Text clsName="text-white">Não possui conta?</Text>
          <Link
            href="/(public)/register"
            className="text-white font-bold underline ml-0.5"
          >
            Cadastre-se
          </Link>
        </View>
      </View>
    </AuthContainer>
  )
}
