import React, { useState } from 'react'
import Tittle from '../components/tittle'
import Filter from '../components/filter'
import { useFiltered } from '../hooks/useFiltered'

function AllBooks () {
  const { filteredLibrary, handleFiltered } = useFiltered()
  const [isMenuVisible, setMenuVisible] = useState(false)
  const [menuPosition, setMenuPosition] = useState({ X: 0, Y: 0 })

  const handleCardClick = (event) => {
    const { clientY, clientX } = event
    setMenuPosition({ clientX, clientY })
    setMenuVisible(true)
  }
  /*
    todo: make a popUp that came in the book that you select
    todo: do that the popUp can be use to pass the books to another page
  */

  return (
    <>
      <Tittle>All Books</Tittle>
      <Filter onFilterChange={handleFiltered} />

      <section className='mt-10 w-full'>
        <ul className='books'>
          {filteredLibrary.map((books) => {
            books = books.book
            return (
              <li className='book relative' onClick={handleCardClick} key={books.ISBN}>
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
