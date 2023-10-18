import UserForm from '../components/UserForm'

export default async function CreateUsers() {
  return (
    <section className="w-full flex-1 overflow-y-auto p-5 pb-0">
      <header className="flex h-[10%] items-center justify-between pb-3">
        <h1 className="header text-white">Adicionar Usuário</h1>
      </header>
      <UserForm />
    </section>
  )
}
