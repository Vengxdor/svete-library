/* eslint-disable react/prop-types */
import React, { useId } from 'react'

function Filter ({ onFilterChange }) {
  const rangeInputId = useId()
  const genreId = useId()
  const handleFilterChange = (e) => {
    onFilterChange(e.target.value)
  }

  return (
    <section className='border-y py-1 dark:border-linesDark flex justify-between items-center'>
      <select
        className='outline-none'
        onChange={handleFilterChange}
        name='genre'
        id={genreId}
      >
        <option value='All'>All</option>
        <option value='Fantasy'>Fantasy</option>
        <option value='Science Fiction'>Science Fiction</option>
        <option value='Horror'>Horror</option>
        <option value='Zombies'>Zombies</option>
      </select>

      <form className='flex items-center gap-2'>
        <label htmlFor={rangeInputId}>By pages</label>
        <input type='range' name='' id={rangeInputId} />
      </form>
    </section>
  )
}

export default Filter
