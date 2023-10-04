import React, { useEffect, useState } from 'react'
import Tittle from '../components/tittle'
import Filter from '../components/filter'
import { useFiltered } from '../hooks/useFiltered'
import { PopUp } from '../components/popUp'
import { Book } from '../components/book'

export function usePopUpLocation () {
  const [menuPosition, setMenuPosition] = useState({ X: 0, Y: 0 })
  const [selectedBook, setSelectedBook] = useState(null)

  const handleCardClick = (book, event) => {
    const { clientX, clientY } = event
    // Look at the book that is clicked
    const clickedBook = event.currentTarget
    // get the point the coordinate that have being clicked
    const rect = clickedBook.getBoundingClientRect()

    // putting a limit to the popUp
    let clientMax = clientX
    const popUpWidth = 155
    if (clientX > window.innerWidth - popUpWidth) {
      clientMax = clientX - popUpWidth
    }
    const popUpPosition = {
      X: clientMax,
      Y: clientY - rect.top
    }

    setMenuPosition(popUpPosition)
    // get the information of the book clicked
    setSelectedBook(book)
  }

  const closePopup = () => {
    setSelectedBook(null)
  }

  return {
    menuPosition,
    handleCardClick,
    closePopup,
    selectedBook
  }
}

function AllBooks () {
  const { filteredLibrary, handleFiltered } = useFiltered()
  const { menuPosition, handleCardClick, closePopup, selectedBook } = usePopUpLocation()

  // Initialize the list from localStorage if it exists, or as an empty array if not
  const [list, setList] = useState(() => {
    const storedList = localStorage.getItem('listBooks')
    return storedList ? JSON.parse(storedList) : []
  })

  // localStorage.removeItem('listBook')

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
    // !error: when the book is in the second or third colum the popUp menu don't work
    // TODO: do that the popUp can be use to pass the books to another page
  */

  return (
    <>
      <Tittle>All Books</Tittle>
      <Filter onFilterChange={handleFiltered} />

      <section className='mt-10 w-full'>
        <ul className='books relative'>
          {filteredLibrary.map((books) => {
            books = books.book
            return (
              <Book key={books.ISBN} books={books} handleCardClick={handleCardClick}/>
            )
          })}
        </ul>

        {selectedBook && (
          <PopUp addList={addList} closePopup={closePopup} menuPosition={menuPosition}/>
        )}
      </section>
    </>
  )
}

export default AllBooks
