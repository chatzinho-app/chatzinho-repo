import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

enum FormatTypes {
  'loc-full' = 'P p', // Localized Date 06/06/2023 12:00
  'loc-short' = 'P'   // Localized Date 06/06/2023
}

export function formatDate(date?: string | Date, formatKey: keyof typeof FormatTypes = 'loc-full'): string {
  if (!date) return ''

  const newDate = typeof date === 'string' ? new Date(date) : date

  return format(newDate, FormatTypes[formatKey], {
    locale: ptBR,
  })
}
