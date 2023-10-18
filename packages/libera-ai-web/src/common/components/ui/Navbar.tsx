'use client'

import React, { useEffect, useRef, useState } from 'react'

import { Route } from '@common/interfaces'
import { logout } from '@common/services/auth'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export interface NavbarProps {
  routes: Array<Route>
  user: {
    name: string
    email: string
  }
  iconSrc?: string
  className?: string
}

export default function Navbar({ routes, user, className }: NavbarProps) {
  const route = useRouter()
  const pathname = usePathname()

  function handleLogout() {
    logout()
    route.replace('/auth/login')
  }

  const [isVisible, setIsVisible] = useState(false)

  const menuWrapperRef = useRef<any>(null)

  useEffect(() => {
    /**
     * Check if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (
        menuWrapperRef.current &&
        !menuWrapperRef.current.contains(event.target) &&
        isVisible
      ) {
        // alert("You clicked outside of me!");
        setIsVisible(false)
      }
    }
    // Bind the event listener
    document.addEventListener('click', handleClickOutside, {
      capture: true,
    })
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('click', () => setIsVisible(false), {
        capture: true,
      })
    }
  }, [menuWrapperRef])

  return (
    <nav className={className}>
      <div className="flex flex-1 items-center justify-between">
        <Image
          className="pointer-events-none"
          width={150}
          height={50}
          src="/assets/icons/logo-black.svg"
          alt="Logo da aplicação"
        />

        <div className="relative flex items-center md:order-2">
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-tertiary text-center text-3xl font-bold text-white focus:ring-4"
            onClick={() => setIsVisible((state) => !state)}
          >
            {user?.name?.split(' ')?.[0]?.[0]}
            {user?.name?.split(' ').length > 1 &&
              user?.name?.split(' ')?.at(-1)?.[0]}
          </button>
          <div
            className={`text-lg divide-lightgray absolute right-0 top-[110%] z-50 divide-y rounded-lg bg-white shadow ${
              isVisible ? '' : 'hidden'
            }`}
            ref={menuWrapperRef}
          >
            <div className="px-4 py-3">
              <span className="block font-semibold text-tertiary">
                {user.name}
              </span>
              <span className="block truncate text-base text-gray-1/80">
                {user.email}
              </span>
            </div>
            <ul
              className="text-lg px-4 py-2 "
              aria-labelledby="user-menu-button"
            >
              {routes?.map((route) => (
                <li key={route.href}>
                  <Link
                    href={route.href}
                    className={`block py-2 ${
                      pathname.includes(route.href)
                        ? 'text-tertiary'
                        : 'text-gray-1'
                    } hover:text-tertiary/50`}
                    aria-current="page"
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  onClick={handleLogout}
                  className="block cursor-pointer py-2 font-bold text-error hover:text-error/50"
                >
                  Sair
                </a>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="w-10 h-10 text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 inline-flex items-center justify-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 md:hidden"
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-user"
        >
          <ul className="flex space-x-5 text-2xl font-semibold">
            {routes?.map((route) => (
              <li key={route.href}>
                <Link
                  href={route.href}
                  className={`block py-2 pl-3 pr-4 hover:text-tertiary/50 ${
                    pathname.includes(route.href)
                      ? 'text-tertiary'
                      : 'text-gray-1'
                  }`}
                  aria-current="page"
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
