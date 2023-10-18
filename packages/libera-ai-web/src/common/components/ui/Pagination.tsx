import React from 'react'

import { cn } from '@common/utils/theme'

interface TableListItemProps {
  page: number
  onClick?: (page: number) => void
  active?: boolean
}

export interface PaginationProps {
  nextPage?: () => void
  prevPage?: () => void
  setPage?: (page: number) => void
  limit: number
  page: number
  hasNext: boolean
  hasPrev: boolean
  totalCount?: number
  className?: string
}

function TableListItem({ active, page, onClick }: TableListItemProps) {
  return (
    <li className="cursor-pointer select-none">
      <a
        onClick={() => onClick?.(page)}
        className={`border-gray-300 hover:bg-gray-100 hover:text-gray-700 flex cursor-pointer items-center justify-center border border-gray-2/50 p-1 px-2 text-gray-2/90 ${
          active
            ? 'bg-primary font-bold'
            : 'bg-gray-2/5 font-normal hover:bg-gray-2/20'
        }`}
      >
        {page}
      </a>
    </li>
  )
}

export default function Pagination({
  prevPage,
  nextPage,
  setPage,
  limit,
  page,
  hasNext,
  hasPrev,
  totalCount,
  className,
}: PaginationProps) {
  return (
    <nav
      className={cn('flex items-center justify-between pt-4', className)}
      aria-label="Table navigation"
    >
      <span className="text-base font-normal text-white">
        Showing{' '}
        <span className="font-semibold text-primary">
          {page}-{Math.ceil((totalCount ?? page) / limit)}
        </span>{' '}
        of <span className="font-semibold text-primary">{totalCount}</span>
      </span>
      <ul className="-space-x-px inline-flex h-8 text-base">
        <li className="cursor-pointer select-none">
          <a
            onClick={hasPrev ? prevPage : undefined}
            className={`hover:bg-gray-100 hover:text-gray-700 ml-0 flex items-center justify-center rounded-l-lg border border-gray-2/50 p-1 px-2 text-gray-2/90 ${
              hasPrev
                ? 'cursor-pointer bg-gray-2/5 hover:bg-gray-2/20'
                : 'cursor-not-allowed bg-gray-2/30 hover:bg-gray-2/30'
            }`}
          >
            Previous
          </a>
        </li>
        {!hasNext && hasPrev && (
          <TableListItem page={page - 3} onClick={setPage} />
        )}
        {page - 2 > 0 && <TableListItem page={page - 2} onClick={setPage} />}
        {page - 1 > 0 && <TableListItem page={page - 1} onClick={setPage} />}
        <TableListItem page={page} active />
        {hasNext && <TableListItem page={page + 1} onClick={setPage} />}
        {!hasPrev && hasPrev && (
          <TableListItem page={page + 2} onClick={setPage} />
        )}

        <li className="cursor-pointer select-none">
          <a
            onClick={hasNext ? nextPage : undefined}
            className={`hover:bg-gray-100 hover:text-gray-700 ml-0 flex items-center justify-center rounded-r-lg border border-gray-2/50 p-1 px-2 text-gray-2/90 ${
              hasNext
                ? 'cursor-pointer bg-gray-2/5 hover:bg-gray-2/20'
                : 'cursor-not-allowed border-gray-2/40 bg-gray-1 text-gray-2/40 hover:bg-gray-1'
            }`}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  )
}
