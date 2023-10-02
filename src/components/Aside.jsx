import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export function Aside () {
  const location = useLocation()
  return (
    <>
    <aside className='w-2/12 mt-6 dark:text-white'>
      <ul className='w-11/12'>
        <li className={`px-2 cursor-pointer rounded-md ${location.pathname === '/' && 'bg-activeLight'} ${location.pathname === '/' && 'dark:bg-activeDark text-black'}`}>
          <Link className='block' to='/'>All Books</Link>
        </li>
        <li className={`px-2 cursor-pointer rounded-md ${location.pathname === '/Featured' && 'bg-activeLight'}  ${location.pathname === '/Featured' && 'dark:bg-activeDark text-black'}`}>
          <Link className='block' to='/Featured'>Featured</Link>
        </li>
        <li className={`px-2 cursor-pointer rounded-md ${location.pathname === '/List' && 'bg-activeLight'} ${location.pathname === '/List' && 'dark:bg-activeDark text-black'}`}>
          <Link className='block' to='/List'>Your List</Link>
        </li>
      </ul>
    </aside>
    <Outlet/>
    </>
  )
}
