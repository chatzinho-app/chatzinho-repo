export type MaskOptions = 'currency' | 'cep' | 'cpf'

function cep(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 9
  let value = e.currentTarget.value
  value = value.replace(/\D/g, '')
  value = value.replace(/^(\d{5})(\d)/, '$1-$2')
  e.currentTarget.value = value
  return value.replace(/-/g, '')
}

function currency(e: React.FormEvent<HTMLInputElement>, isEvent = true) {
  console.log(String(e.currentTarget.value))

  let value = String(e.currentTarget.value)

  value = value.replace(/\D/g, '')

  while (true) {
    if (value.length <= 2) {
      value = value.padStart(3, '0')
      break
    } else {
      if (value[0] === '0') {
        value = value.substring(1)
        console.log(value)
      } else {
        break
      }
    }
  }

  value = value.replace(/(\d)(\d{2})$/, '$1,$2')
  value = value.replace(/(?=(\d{3})+(\D))\B/g, '.')

  if (isEvent) {
    e.currentTarget.value = `R$ ${value}`
  } else {
    return `R$ ${value}`
  }
  return Number(value.replace(/\./g, '').replace(',', '.'))
}

function cpf(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 14
  let value = e.currentTarget.value
  if (!value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{3})(\d)/, '$1.$2')
    value = value.replace(/(\d{3})(\d)/, '$1.$2')
    value = value.replace(/(\d{3})(\d{2})$/, '$1-$2')
    e.currentTarget.value = value
  }
  return value.replace(/\.|-/g, '')
}

export const masks = {
  cep,
  currency,
  cpf,
}
