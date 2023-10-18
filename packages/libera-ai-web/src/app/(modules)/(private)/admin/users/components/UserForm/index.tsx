'use client'

import MaskField from '@common/components/fields/MaskField'
import SelectField from '@common/components/fields/SelectField'
import TextField from '@common/components/fields/TextField'
import Button from '@ui/Button'
import { useRouter } from 'next/navigation'
import { DeepPartial, FormProvider } from 'react-hook-form'

import useUserForm from './hook'
import { UserFormSchemaValues } from './schema'

interface UserFormProps {
  defaultValues?: DeepPartial<UserFormSchemaValues>
}

export default function UserForm({ defaultValues }: UserFormProps) {
  const router = useRouter()

  const { form, onSubmit } = useUserForm({
    defaultValues,
  })

  const { isSubmitting, isValid } = form.formState

  return (
    <FormProvider {...form}>
      <section className="flex h-[90%] w-full flex-1 flex-col items-center">
        <form
          className="flex h-full w-full flex-1 flex-col justify-between"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="grid w-full grid-flow-row-dense grid-cols-3 grid-rows-3 gap-1">
            <TextField
              className="mb-1"
              name="name"
              type="text"
              label="Nome"
              placeholder="Insira seu nome aqui"
              required
              autoFocus={!defaultValues?.cpf}
            />
            <TextField
              className="mb-1"
              name="email"
              type="email"
              label="Email"
              placeholder="ex: email@email.com"
              required
            />
            <MaskField
              className="mb-1"
              name="cpf"
              mask="cpf"
              label="CPF"
              placeholder="000.000.000-00"
              required
            />
            <TextField
              className="mb-1"
              name="birthdate"
              type="date"
              label="Data de nascimento"
              placeholder="02/09/2001"
              pattern="YYYY-MM-DDTHH:mm:ssZ"
              required
            />
            <SelectField
              className="mb-1"
              name="status"
              label="Status"
              placeholder="Selecione o status"
              options={[
                { label: 'Ativo', value: 'ACTIVE' },
                { label: 'Inativo', value: 'INACTIVE' },
              ]}
              required
            />
            <SelectField
              className="mb-1"
              name="role"
              label="Cargo"
              placeholder="Selecione o cargo"
              options={[
                { label: 'Super Admin', value: 'SUPER_ADMIN' },
                { label: 'Admin', value: 'ADMIN' },
                { label: 'Síndico', value: 'MANAGER' },
                { label: 'Porteiro', value: 'DOORMAN' },
                { label: 'Morador', value: 'RESIDENT' },
              ]}
              required
            />
          </div>
          <div className="flex flex-1 items-end gap-4 py-4">
            <Button
              type="submit"
              colorSchema="primary"
              disabled={!isValid}
              loading={isSubmitting}
            >
              {defaultValues?.cpf ? 'Salvar' : 'Adicionar'}
            </Button>
            <Button
              type="reset"
              disabled={isSubmitting}
              variant="outline"
              onClick={() => router.back()}
            >
              Cancelar
            </Button>
          </div>
        </form>
      </section>
    </FormProvider>
  )
}
