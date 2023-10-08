import React from 'react'
import Tittle from '../components/tittle'
import { Book } from '../components/book'
import { usePopUp } from '../hooks/usePopUp'
import { PopUp } from '../components/popUp'
import { useList } from '../hooks/useList'

function List () {
  const storageBooks = localStorage.getItem('listBooks')
  const books = JSON.parse(storageBooks)
  const { addList, closePopup, menuPosition, selectedBook, handleCardClick } = usePopUp()
  const { removeList } = useList(selectedBook)

  return (
    <>
      <Tittle>Your List</Tittle>
      <section className='mt-10 w-full'>
        {books.length !== 0
          ? (
            <>

          <ul className='books relative'>
            {books.map((book) => {
              return (
                <Book
                key={book.ISBN}
                books={book}
                handleCardClick={handleCardClick}
                />
              )
            })}
          </ul>
            {selectedBook && (
            <PopUp addList={addList} closePopup={closePopup} menuPosition={menuPosition} removeList={removeList}>remove from list</PopUp>

            )}
          </>
            )
          : (
          <p className='text-center dark:text-white'>There&apos;re no books in your list </p>
            )}
      </section>
    </>
  )
}

export default List
