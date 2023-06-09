import Button from '@ui/Button'

import Field from './common/components/ui/Field'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <h1>Hello World!</h1>
      <Field label="Label" placeholder="placeholder" type="password" required />
      <Button>Teste Button</Button>
    </main>
  )
}
