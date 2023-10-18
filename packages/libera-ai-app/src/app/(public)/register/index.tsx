import { FormProvider } from 'react-hook-form'
import { View } from 'react-native'

import { Link, useRouter } from 'expo-router'

import { AuthContainer } from '@components/AuthContainer'
import TextField from '@components/fields/TextField'
import Button from '@ui/Button'
import { Text } from '@ui/Text'

import FoundRegister from './components/FoundUser'
import NotFoundAlert from './components/NotFoundAlert'
import useRegister from './hook'

export default function Register() {
  const router = useRouter()

  const { data: userData, reset, form, onSubmit } = useRegister()

  const { isSubmitting, isValid } = form.formState

  const foundUser = userData?.data

  const hasUser = !!foundUser?.id && isValid
  const notFoundUser = userData?.error && !foundUser?.id

  return (
    <AuthContainer
      title="Cadastre-se"
      subtitle="Informe seu identificador para podermos te localizar"
      color="secondary"
    >
      <FormProvider {...form}>
        <TextField
          name="identifier"
          label="Identificador"
          placeholder="ex: 123456"
          required
          autoCapitalize="none"
          autoComplete="one-time-code"
          autoCorrect={false}
          enterKeyHint="done"
          inputMode="numeric"
          keyboardType="numeric"
          disabled={hasUser}
        />
        {notFoundUser && <NotFoundAlert />}
        {hasUser && (
          <FoundRegister
            name={foundUser?.name}
            cpf={foundUser?.cpf}
            onReject={() => {
              reset()
              form.setValue('identifier', '')
            }}
            onAccept={() =>
              router.push(`/(public)/register-password/${foundUser.cpf}`)
            }
          />
        )}

        {!hasUser && (
          <View className="flex flex-1 justify-end">
            <Button
              className=""
              disabled={!isValid}
              loading={isSubmitting}
              onPress={form.handleSubmit(onSubmit)}
            >
              Próximo
            </Button>

            <View className="flex flex-row items-center justify-center my-1">
              <Text clsName="text-white">Já possui conta?</Text>
              <Link
                href="/(public)/login"
                className="text-white font-bold underline ml-0.5"
              >
                Login
              </Link>
            </View>
          </View>
        )}
      </FormProvider>
    </AuthContainer>
  )
}
