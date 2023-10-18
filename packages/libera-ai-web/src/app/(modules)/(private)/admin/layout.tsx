import React, { PropsWithChildren } from 'react'

import { publicApi } from '@common/config/api'
import envs from '@common/config/envs'
import { adminRoutes } from '@common/config/routes'
import Card from '@ui/Card'
import Navbar from '@ui/Navbar'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function AdminLayout({ children }: PropsWithChildren) {
  const token = cookies().get(`@${envs.COOKIES_PREFIX}:${envs.TOKEN_ALIAS}`)
    ?.value

  const user = await publicApi.GET('/v1/auth/me', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })

  if (!user?.data?.id) return redirect('/auth/login')

  return (
    <Card className="mt-[5vh] h-[80vh] max-w-[90vw] flex-col items-center justify-between self-center ">
      <Navbar
        className="absolute left-[5vw] right-[5vw] top-[5vh]"
        user={user.data}
        routes={adminRoutes}
      />
      {children}
    </Card>
  )
}
