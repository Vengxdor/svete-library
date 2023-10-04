import React from 'react'
import Tittle from '../components/tittle'
import { Book } from '../components/book'

function List () {
  const storageBooks = localStorage.getItem('listBooks')
  const books = JSON.parse(storageBooks)
  return (
    <>
      <Tittle>Your List</Tittle>
      <section className='mt-10 w-full'>
        {books.length !== 0
          ? (<ul className='books relative'>
          {books.map((book) => {
            return (
              <Book key={book.ISBN} books={book}/>

            )
          })}
        </ul>)
          : <p className='text-center'>There&apos;re no books in your list </p>
      }
      </section>
    </>
  )
}

export default List
