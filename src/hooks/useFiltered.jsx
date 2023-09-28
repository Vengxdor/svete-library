import { useState } from 'react'
import Books from '../books.json'

export function useFiltered () {
  const library = Books.library

  const [filteredLibrary, setFilteredLibrary] = useState(library)

  const handleFiltered = (filtered) => {
    if (filtered === 'All') {
      setFilteredLibrary(library)
      // console.log('todo')
    } else {
      const filter = library.filter((books) => {
        return books.book.genre === filtered
      })
      setFilteredLibrary(filter)
    }
  }
  return { filteredLibrary, handleFiltered }
}
