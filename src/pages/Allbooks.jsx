import React from 'react'
import Tittle from '../components/tittle'
import Filter from '../components/Filters'
// import { useFiltered } from '../hooks/useFilter'
import { BookList } from '../components/book'
import { FilterProvider } from '../context/FilterContext'

function AllBooks () {
  // const { handleFiltered } = useFiltered()

  return (
    <FilterProvider>
      <Tittle>All Books</Tittle>
      <Filter />

      <section className='mt-10 w-full'>
        <BookList />
      </section>
    </FilterProvider>
  )
}

export default AllBooks
