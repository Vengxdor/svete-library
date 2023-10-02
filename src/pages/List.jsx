import React from 'react'
import Tittle from '../components/tittle'

function List () {
  const storageBooks = localStorage.getItem('listBooks')
  const books = JSON.parse(storageBooks)
  return (
    <>
      <Tittle>Your List</Tittle>
      <section className='mt-10 w-full'>
        {books
          ? (<ul className='books relative'>
          {books.map((book) => {
            return (
              <li
                className='book relative'
                key={book.ISBN}
              >
                <img
                  className='object-cover aspect-[2/3]'
                  src={book.cover}
                  alt={`cover of the movie ${book.title}`}
                />
                <h4 className='truncate mt-2 dark:text-white'>{book.title}</h4>
                <span className='text-zinc-500'>{`${book.author.name} • ${book.year}`}</span>
                <span className='absolute inset-0 '>
                  <span className='bg-activeLight p-1 m-1 rounded-md dark:bg-activeDark'>
                    {book.genre}
                  </span>
                </span>
              </li>
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
