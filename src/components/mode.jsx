import React, { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa6'

function Mode () {
  const [mode, setMode] = useState(() => {
    const storageMode = JSON.parse(localStorage.getItem('mode'))
    return storageMode === null ? false : storageMode
  })
  const handleMode = () => {
    document.documentElement.classList.toggle('dark')
    setMode(!mode)
  }

  useEffect(() => {
    if (mode === true) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('mode', JSON.stringify(mode))
  }, [mode])

  return (
    <i
      onClick={handleMode}
      className='p-2 border rounded-lg cursor-pointer dark:border-linesDark'
    >
      {mode ? <FaSun /> : <FaMoon />}
    </i>
  )
}

export default Mode
