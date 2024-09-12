import { PrivateContainer } from '@components/PrivateContainer'
import { Text } from '@ui/Text'

import { useAuth } from './context'

export default function Home() {
  const { user } = useAuth()

  return (
    <PrivateContainer
      title={`Olá, ${user?.name}`}
      subtitle="Residencial Siena - Bloco J apto. 304"
    >
      <Text>Olá, {user?.name}</Text>
      <Text>Residencial Siena - Bloco J apto. 304</Text>
    </PrivateContainer>
  )
}
