/* eslint-disable react/prop-types */
import React, { useId } from 'react'
import { useFiltered } from '../hooks/useFilter'

function Filter () {
  const rangeInputId = useId()
  const genreId = useId()
  const { setFilters, filters } = useFiltered()

  const handleRange = e => {
    setFilters((prevState) => ({
      ...prevState,
      minPages: e.target.value
    }))
  }

  const handleGenre = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      genre: e.target.value
    }))
  }

  return (
    <section className='border-y py-1 dark:border-linesDark flex justify-between items-center'>
      <form className='flex items-center gap-2 dark:text-white'>
        <label htmlFor={rangeInputId}>By pages</label>
        <input defaultValue={0} onChange={handleRange} min='0' max='1200' type='range' id={rangeInputId} />
        <span>{filters.minPages}</span>
      </form>
      <select
        className='outline-none mr-3'
        name='genre'
        id={genreId}
        onChange={handleGenre}
      >
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
