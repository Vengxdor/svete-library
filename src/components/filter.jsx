import React from 'react'

function Filter () {
  return (
    <section className='border-y py-1'>
      <select className='outline-none' name='genre'>
        <option value='All'>All</option>
        <option value='Fantasy'>Fantasy</option>
        <option value='Science Fiction'>Science Fiction</option>
        <option value='Horror'>Horror</option>
        <option value='Zombies'>Zombies</option>
      </select>
    </section>
  )
}

export default Filter
