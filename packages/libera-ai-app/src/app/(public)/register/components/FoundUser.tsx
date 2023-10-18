import { View } from 'react-native'

import Button from '@ui/Button'
import { Text } from '@ui/Text'

interface DataFieldProps {
  label: string
  value?: string
}

function DataField({ label, value }: DataFieldProps) {
  return (
    <View className="mb-1">
      <Text clsName="text-gray-2 opacity-60 mb-0.5">{label}:</Text>
      <Text clsName="text-gray-2 font-medium">{value}</Text>
    </View>
  )
}

export interface UserInfoProps {
  name: string
  cpf: string
  condominium: string
  number: string
}

function UserInfo({ name, cpf, condominium, number }: UserInfoProps) {
  return (
    <View>
      <Text clsName="text-xl text-white font-bold mb-1">
        Confirme se é você
      </Text>
      <DataField label="Nome" value={name} />
      <DataField label="CPF" value={cpf} />
      <DataField label="Condominío" value={condominium} />
      <DataField label="Apartamento" value={number} />
    </View>
  )
}

interface FoundRegisterProps extends Partial<UserInfoProps> {
  onAccept?: () => any
  onReject?: () => any
}

export default function FoundRegister({
  name,
  cpf,
  onAccept,
  onReject,
}: FoundRegisterProps) {
  return (
    <View>
      <UserInfo
        name={name ?? ''}
        cpf={cpf ?? ''}
        condominium="Residencial Siena, Pelotas/RS"
        number="Bloco J / Apto. 3024 "
      />
      <Button
        className="mt-3"
        // disabled={!isValid}
        // loading={isSubmitting}
        onPress={onAccept}
      >
        Sim, sou eu!
      </Button>
      <Button
        className="mt-1"
        variant="outline"
        // disabled={!isValid}
        // loading={isSubmitting}
        onPress={onReject}
      >
        Não sou eu, tentar novamente
      </Button>
    </View>
  )
}
