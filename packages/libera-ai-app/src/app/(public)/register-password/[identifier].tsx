import { FormProvider } from 'react-hook-form'
import { Platform, View } from 'react-native'

import { Link, useLocalSearchParams } from 'expo-router'

import { AuthContainer } from '@components/AuthContainer'
import TextField from '@components/fields/TextField'
import Button from '@ui/Button'
import { Text } from '@ui/Text'

import useRegisterPassword from './hook'

export default function RegisterPassword() {
  const params = useLocalSearchParams<{ identifier: string }>()

  const { form, onSubmit } = useRegisterPassword({ cpf: params.identifier })
  const { isSubmitting, isValid } = form.formState

  return (
    <AuthContainer
      title="Cadastre-se"
      subtitle="Informe os dados de login para finalizar"
      color="secondary"
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
          enterKeyHint="next"
          inputMode="text"
          keyboardType={
            Platform.OS === 'android'
              ? 'visible-password'
              : 'numbers-and-punctuation'
          }
        />
        <TextField
          name="repeatPassword"
          label="Repetir senha"
          placeholder="Informe novamente sua senha"
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
        <View className="flex-1 justify-end">
          <Button
            disabled={!isValid}
            loading={isSubmitting}
            onPress={form.handleSubmit(onSubmit)}
          >
            Próximo
          </Button>
          <View className="flex flex-row items-center justify-center my-1 opacity-0">
            <Text clsName="text-white">Já possui conta?</Text>
            <Link
              disabled
              href="/(public)/login"
              className="text-white font-bold underline ml-0.5"
            >
              Login
            </Link>
          </View>
        </View>
      </FormProvider>
    </AuthContainer>
  )
}
