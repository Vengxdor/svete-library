import { useContext } from 'react'
import { FilterContex } from '../context/FilterContext'

export function useFiltered () {
  const { filters, setFilters } = useContext(FilterContex)

  const filterBooks = (books) => {
    return books.filter(book => {
      return (
        book.book.pages >= filters.minPages &&
        (
          filters.genre === 'All' ||
          book.book.genre === filters.genre
        )
      )
    })
  }

  return { filterBooks, setFilters, filters }
}
