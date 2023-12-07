import { publicApi } from '@common/config/api'
import envs from '@common/config/envs'
import { cookies } from 'next/headers'

import UsersChart from './components/UsersChart'

export default async function Dashboard() {
  const token = cookies().get(`@${envs.COOKIES_PREFIX}:${envs.TOKEN_ALIAS}`)
    ?.value

  const { data } = await publicApi.GET('/v1/users/statistics', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })

  const { data: audits } = await publicApi.GET('/v1/audits', {
    params: { query: { limit: 10, offset: 0 } },
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })

  const chartData = [
    ['Cargo', 'Usuários'],
    ['Moradores', data?.count.resident ?? 0],
    ['Porteiro', data?.count.doorman ?? 0],
    ['Administradores', data?.count.admin ?? 0],
  ]

  return (
    <section className="w-full  flex-1 overflow-y-auto p-5 pb-0">
      <header className="flex h-[10%] items-center justify-between pb-3">
        <h1 className="header text-white">Dashboard</h1>
      </header>
      <section className="flex flex-1 items-center justify-center gap-x-[5%] text-5xl font-semibold text-white">
        <div className="flex flex-col items-center rounded-md border-2 border-primary p-5">
          <h3 className="text-2xl font-bold text-primary">Moradores</h3>
          <span>{String(data?.count.resident).padStart(3, '0')}</span>
        </div>
        <div className="flex flex-col items-center rounded-md border-2 border-secondary p-5">
          <h3 className="text-2xl font-bold text-secondary">Porteiros</h3>
          <span>{String(data?.count.doorman).padStart(3, '0')}</span>
        </div>
        <div className="flex flex-col items-center rounded-md border-2 border-tertiary p-5">
          <h3 className="text-2xl font-bold text-tertiary">Administradores</h3>
          <span>{String(data?.count.admin).padStart(3, '0')}</span>
        </div>
        <div className="flex flex-col items-center rounded-md border-2 border-tertiary p-5">
          <h3 className="text-2xl font-bold text-tertiary">Qtd. Requisições</h3>
          <span>{String(audits?.meta?.count ?? 0).padStart(3, '0')}</span>
        </div>
      </section>
      {/* <section>
        <h2>Total de usuários cadastrados</h2>
        <h2>40</h2>
      </section>
      <section>
        <h2>Usuários Inativos</h2>
        <h2>40</h2>
      </section>
      <section>
        <h2>Usuários ativos</h2>
        <h2>40</h2>
      </section> */}
      <UsersChart data={chartData} />
    </section>
  )
}
