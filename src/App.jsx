/* eslint-disable space-before-function-paren */
import React from 'react'
import { Aside } from './components/aside'
import { Route, Routes } from 'react-router-dom'
import AllBooks from './pages/Allbooks'
import List from './pages/list'
import Mode from './components/mode'
import { FaBook } from 'react-icons/fa6'

function App() {
  return (
    <>
      <header className='flex justify-between  items-center h-16 border-b dark:border-linesDark  dark:text-white'>
        <div className='flex items-center gap-1 '>
        <FaBook/>

        <h1 className='text-lg font-semibold italic'>Svete</h1>
        </div>
        <div className='flex items-center gap-3'>
          <Mode/>
          <img
            className='w-8 rounded-full'
            src='https://imgs.search.brave.com/0G6UOCgMYhxiBjowwsnHgM_F1irZk5OSoatLZUrvbSM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ncmFw/aC5mYWNlYm9vay5j/b20vNTEzMTcxNTMw/L3BpY3R1cmU_dHlw/ZT1sYXJnZQ'
            alt='Not user profile picture'
          />
        </div>
      </header>
      <main className='flex'>
        <Aside />
        <section className='w-full ml-4'>
          <Routes>
            <Route path='/' element={<AllBooks />}></Route>
            <Route path='/list' element={<List />}></Route>
          </Routes>
        </section>
      </main>
    </>
  )
}

export default App
