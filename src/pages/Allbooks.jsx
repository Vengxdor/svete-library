import React from 'react'
import Tittle from '../components/tittle'
import Filter from '../components/filter'
import { useFiltered } from '../hooks/useFiltered'
import { PopUp } from '../components/popUp'
import { Book } from '../components/book'
import { usePopUp } from '../hooks/usePopUp'
import { useList } from '../hooks/useList'

function AllBooks () {
  const { filteredLibrary, handleFiltered } = useFiltered()
  const { menuPosition, handleCardClick, closePopup, selectedBook } = usePopUp()
  const { addList } = useList(selectedBook)

  /*
    // !error: you can add the same book multiple times to the list
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
