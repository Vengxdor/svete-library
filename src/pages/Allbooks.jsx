import React, { useState } from 'react'
import Tittle from '../components/tittle'
import Filter from '../components/filter'
import Books from '../books.json'

function AllBooks () {
  const library = Books.library

  const [filteredLibrary, setFilteredLibrary] = useState(library)

  const handleFiltered = (filtered) => {
    if (filtered === 'all') {
      setFilteredLibrary(library)
      // console.log('todo')
    } else {
      const filter = library.filter((books) => {
        return books.book.genre === filtered
      })
      setFilteredLibrary(filter)
    }
  }

  // console.log(filteredLibrary)

  return (
    <>
      <Tittle>All Books</Tittle>
      <Filter onFilterChange={handleFiltered} />

      <section className='mt-10 w-full'>
        <ul className='books'>
          {filteredLibrary.map((books) => {
            books = books.book
            return (
              <li className='book relative' key={books.ISBN}>
                <img
                  className='object-cover aspect-[2/3]'
                  src={books.cover}
                  alt={`cover of the movie ${books.title}`}
                />
                <h4 className='truncate mt-2'>{books.title}</h4>
                <span className='text-zinc-500'>{`${books.author.name} • ${books.year}`}</span>
                <span className='absolute inset-0 '>
                  <span className='bg-activeLight p-1 m-1 rounded-md '>
                    {books.genre}
                  </span>
                </span>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}

export default AllBooks
