import React from 'react'
import Tittle from '../components/tittle'
import Filter from '../components/Filters'
import { useFiltered } from '../hooks/useFiltered'
import { BookList } from '../components/book'

function AllBooks () {
  const { handleFiltered } = useFiltered()

  return (
    <>
      <Tittle>All Books</Tittle>
      <Filter onFilterChange={handleFiltered} />

      <section className='mt-10 w-full'>
        <BookList />
      </section>
    </>
  )
}

export default AllBooks
