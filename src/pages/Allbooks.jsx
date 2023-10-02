import React, { useEffect, useRef, useState } from 'react'
import Tittle from '../components/tittle'
import Filter from '../components/filter'
import { useFiltered } from '../hooks/useFiltered'
import { FaPlay, FaPlus, FaX } from 'react-icons/fa6'

function AllBooks () {
  const { filteredLibrary, handleFiltered } = useFiltered()
  const [menuPosition, setMenuPosition] = useState({ X: 0, Y: 0 })
  const listOfBooks = useRef(null)
  const [selectedBook, setSelectedBook] = useState(null)
  // books in the list
  const [list, setList] = useState([])
  // localStorage.removeItem('listBook')

  const handleCardClick = (book, event) => {
    const { clientX, clientY } = event
    setMenuPosition({ X: clientX, Y: clientY })
    setSelectedBook(book)
  }

  const closePopup = () => {
    setSelectedBook(null)
  }

  useEffect(() => {
    localStorage.setItem('listBooks', JSON.stringify(list))
  }, [list])

  const addList = () => {
    const isBookInlist = list.some(
      (bookInList) => bookInList.ISBN === selectedBook.ISBN
    )

    if (isBookInlist) return
    setList([...list, selectedBook])
  }
  /*
    !error: you can add the same book multiple times to the list
    !error: when the book is in the second or third colum the popUp menu don't work
    todo: do that the popUp can be use to pass the books to another page
  */

  return (
    <>
      <Tittle>All Books</Tittle>
      <Filter onFilterChange={handleFiltered} />

      <section className='mt-10 w-full'>
        <ul ref={listOfBooks} className='books relative'>
          {filteredLibrary.map((books) => {
            books = books.book
            return (
              <li
                className='book relative'
                onClick={() => handleCardClick(books, event)}
                key={books.ISBN}
              >
                <img
                  className='object-cover aspect-[2/3]'
                  src={books.cover}
                  alt={`cover of the movie ${books.title}`}
                />
                <h4 className='truncate mt-2 dark:text-white'>{books.title}</h4>
                <span className='text-zinc-500'>{`${books.author.name} • ${books.year}`}</span>
                <span className='absolute inset-0 '>
                  <span className='bg-activeLight p-1 m-1 rounded-md dark:bg-activeDark'>
                    {books.genre}
                  </span>
                </span>
              </li>
            )
          })}
        </ul>

        {/* Menú emergente */}
        {selectedBook && (
          <div
            style={{ left: `${menuPosition.X}px`, top: `${menuPosition.Y}px` }}
            className='bg-white rounded-lg absolute z-10 p-2 flex items-start flex-col gap-1'
          >
            <button className='flex items-center'>
              <FaPlay className='mr-1 text-sm' />
              Preview
            </button>
            <button className='flex items-center' onClick={addList}>
              <FaPlus className='mr-1' />
              Add to the list
            </button>
            <button className='flex items-center' onClick={closePopup}>
              <FaX className='mr-1 text-sm' />
              close
            </button>
          </div>
        )}
      </section>
    </>
  )
}

export default AllBooks
