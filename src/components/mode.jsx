import React, { useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa6'

function Mode () {
  const [darkMode, setDarkMode] = useState(false)

  const handleMode = () => {
    document.documentElement.classList.toggle('dark')
    setDarkMode(!darkMode)
  }
  return (
        <i
        onClick={handleMode}
        className='p-2 border rounded-lg cursor-pointer dark:border-linesDark'
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </i>
  )
}

export default Mode
