import Button from '@ui/Button'
import Field from '@ui/Field'
import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/auth/login')

  return (
    <main className="flex flex-col items-center justify-between">
      <h1>Hello World!</h1>
      <Field label="Label" placeholder="placeholder" type="password" required />
      <Button>Teste Button</Button>
    </main>
  )
}
