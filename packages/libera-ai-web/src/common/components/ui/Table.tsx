import React, { useState } from 'react'

import { cn } from '@common/utils'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa'

interface TableProps<Data> {
  data: Data[]
  columns: ColumnDef<Data, any>[]
  className?: string
  enableCheckbox?: boolean
  onEdit?: (id: string) => any
  onDelete?: (id: string) => Promise<any>
}

export default function Table<Data extends object>({
  data,
  columns,
  className,
  enableCheckbox,
  onEdit,
  onDelete,
}: TableProps<Data>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  })

  return (
    <div
      className={cn(
        'scrollbar-rounded-full relative overflow-auto rounded-sm scrollbar-thin scrollbar-thumb-primary/50',
        className,
      )}
    >
      <table className="text-gray-500 relative w-full text-left text-base">
        <thead className="text-xs sticky top-0 bg-darkgray-1 uppercase text-white">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {enableCheckbox && (
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="rounded focus:ring-blue-500 h-4 w-4 border-gray-1 bg-gray-1 focus:ring-2"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
              )}
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  scope="col"
                  className="f px-6 py-3"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <p className="flex cursor-pointer select-none items-center">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                    <span className="ml-1">
                      {header.column.getIsSorted() ? (
                        header.column.getIsSorted() === 'desc' ? (
                          <FaSortDown aria-label="sorted descending" />
                        ) : (
                          <FaSortUp aria-label="sorted ascending" />
                        )
                      ) : (
                        <FaSort aria-label="sort disabled" />
                      )}
                    </span>
                  </p>
                </th>
              ))}
              <th scope="col" className="px-6 py-3">
                Ações
              </th>
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => {
            // const values = row.original

            return (
              <tr
                key={row.id}
                className="border-b-[1px] border-b-white/50 bg-gray-2/5 text-gray-2 hover:bg-gray-2/20"
              >
                {enableCheckbox && (
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 h-4 w-4 focus:ring-2"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                )}
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-6 py-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
                <td className="flex items-center space-x-3 px-6 py-4">
                  <a
                    onClick={() => onEdit?.(row.getValue('id'))}
                    className="cursor-pointer font-medium text-primary hover:underline"
                  >
                    Editar
                  </a>
                  <a
                    // data-modal-target={`delete-modal-${row.getValue('id')}`}
                    // data-modal-toggle={`delete-modal-${row.getValue('id')}`}
                    onClick={async () => await onDelete?.(row.getValue('id'))}
                    className="cursor-pointer font-medium text-error hover:underline"
                  >
                    Excluir
                  </a>
                  {/* <DeleteModal
                    id={`delete-modal-${row.getValue('id')}`}
                    onDelete={async () => await onDelete?.(row.getValue('id'))}
                  /> */}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {data.length === 0 && (
        <p className="mt-5 text-center text-white">
          Nenhum resultado encontrado
        </p>
      )}
    </div>
  )
}
