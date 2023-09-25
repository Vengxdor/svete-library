/* eslint-disable react/prop-types */
import React from 'react'

function Tittle ({ children }) {
  return (
    <>
      <h2 className='py-7 font-semibold text-3xl dark:text-white'>{children}</h2>
    </>
  )
}

export default Tittle
