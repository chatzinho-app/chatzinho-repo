interface DeleteModalProps {
  id?: string
  onDelete?: () => any
}

export default function DeleteModal({ id, onDelete }: DeleteModalProps) {
  return (
    <div
      id={id ?? 'delete-modal'}
      tabIndex={-1}
      className="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden p-4 md:inset-0"
    >
      <div className="relative max-h-full w-full max-w-md">
        <div className="dark:bg-gray-700 relative rounded-lg bg-white shadow">
          <button
            type="button"
            className="right-2.5 text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 absolute top-3 ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm dark:hover:text-white"
            data-modal-hide="popup-modal"
          >
            <svg
              className="h-3 w-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6 text-center">
            <svg
              className="text-gray-400 w-12 h-12 dark:text-gray-200 mx-auto mb-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="text-lg text-gray-500 dark:text-gray-400 mb-5 font-normal">
              Você tem ceterza que deseja deletar esse item?
            </h3>
            <button
              data-modal-hide="popup-modal"
              type="button"
              onClick={onDelete}
              className="bg-red-600 hover:bg-red-800 focus:ring-red-300 dark:focus:ring-red-800 py-2.5 mr-2 inline-flex items-center rounded-lg px-5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
            >
              Sim, tenho certeza
            </button>
            <button
              data-modal-hide="popup-modal"
              type="button"
              className="text-gray-500 hover:bg-gray-100 focus:ring-gray-200 border-gray-200 py-2.5 hover:text-gray-900 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-600 rounded-lg border bg-white px-5 text-sm font-medium focus:z-10 focus:outline-none focus:ring-4 dark:hover:text-white"
            >
              Não, cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
