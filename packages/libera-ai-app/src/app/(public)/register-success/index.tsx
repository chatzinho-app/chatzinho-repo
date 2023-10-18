import { View } from 'react-native'

import { useRouter } from 'expo-router'

import RegisterFigure from '@assets/figures/register-success.svg'
import { AuthContainer } from '@components/AuthContainer'
import Button from '@ui/Button'

export default function RegisterSuccess() {
  const router = useRouter()

  return (
    <AuthContainer
      title="Cadastro finalizado"
      subtitle="Agora só clicar em “finalizar” e começar a usar o app"
      color="secondary"
    >
      <RegisterFigure />
      <View className="flex-1 justify-end">
        <Button onPress={() => router.replace('/(public)/login')}>
          Finalizar
        </Button>
      </View>
    </AuthContainer>
  )
}
