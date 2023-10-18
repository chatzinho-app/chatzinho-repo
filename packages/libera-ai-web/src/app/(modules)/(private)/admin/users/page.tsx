import { publicApi } from '@common/config/api'
import envs from '@common/config/envs'
import { cookies } from 'next/headers'

import UsersTable from './components/UsersTable'

export default async function Users() {
  const token = cookies().get(`@${envs.COOKIES_PREFIX}:${envs.TOKEN_ALIAS}`)
    ?.value

  const initialUsers = await publicApi.GET('/v1/users', {
    params: { query: { limit: 10, offset: 0 } },
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })

  return (
    <div className="max-h-full w-full flex-1 p-5">
      <UsersTable initialUsers={initialUsers as any} />
    </div>
  )
}
