import React from 'react'

import { debounce } from 'debounce'
import { FiSearch } from 'react-icons/fi'

import Button from './Button'
import Input from './Input'

export interface TableActionsProps {
  title: string
  addButtonLabel?: string
  onAdd?: () => void
  searchLabel?: string
  onSearch?: (value: string) => void
}

export default function TableActions({
  title,
  addButtonLabel = 'Adicionar',
  onAdd,
  searchLabel = 'Procure por items',
  onSearch,
}: TableActionsProps) {
  return (
    <header className="flex items-center justify-between pb-3">
      <h1 className="header text-white">{title}</h1>
      <div className="flex flex-1 items-center justify-end">
        <Input
          startDecorator={<FiSearch color="#4a4a4a" />}
          placeholder={searchLabel}
          className="mr-2 w-[30%]"
          onChange={debounce((e: any) => onSearch?.(e?.target?.value), 500)}
        />
        {!!onAdd && (
          <Button className="w-auto" onClick={onAdd}>
            {addButtonLabel}
          </Button>
        )}
      </div>
    </header>
  )
}
