import { publicApi } from '@common/config/api'
import envs from '@common/config/envs'
import { cookies } from 'next/headers'

import AuditsTable from './components/AuditsTable'

export default async function Audits() {
  const token = cookies().get(`@${envs.COOKIES_PREFIX}:${envs.TOKEN_ALIAS}`)
    ?.value

  const initialAudits = await publicApi.GET('/v1/audits', {
    params: { query: { limit: 10, offset: 0 } },
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })

  return (
    <div className="max-h-full w-full flex-1 p-5">
      <AuditsTable initialAudits={initialAudits as any} />
    </div>
  )
}
