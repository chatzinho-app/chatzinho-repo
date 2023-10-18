import { publicApi } from '@common/config/api'
import envs from '@common/config/envs'
import { cookies } from 'next/headers'

import UserForm from '../../components/UserForm'

interface EditUsersParams {
  params: { id: string }
}

export default async function EditUsers({ params }: EditUsersParams) {
  const token = cookies().get(`@${envs.COOKIES_PREFIX}:${envs.TOKEN_ALIAS}`)
    ?.value

  const initialUser = await publicApi.GET('/v1/users/{id}', {
    params: {
      path: { id: params.id },
    },
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })

  return (
    <section className="w-full flex-1 overflow-y-auto p-5 pb-0">
      <header className="flex h-[10%] items-center justify-between pb-3">
        <h1 className="header text-white">Editar Usuário</h1>
      </header>
      <UserForm
        defaultValues={{
          ...initialUser?.data,
          role: initialUser?.data?.roles[0],
        }}
      />
    </section>
  )
}
