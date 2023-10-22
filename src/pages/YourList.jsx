import React, { useContext } from 'react'
import Tittle from '../components/tittle'
import { ListContext } from '../context/list'
import { useList } from '../hooks/useList'

function List () {
  // const storageBooks = localStorage.getItem('listBooks')
  // const books = JSON.parse(storageBooks)
  const { listOfBooks } = useContext(ListContext)
  const { removeFromList } = useList()

  return (
    <>
      <Tittle>Your List</Tittle>
      <section className='mt-10 w-full'>
        <ul className='books relative'>
          {listOfBooks.map((book) => {
            return (
              <li key={book.ISBN} className='book relative w-[202px]'>
                <div >
                  <img
                    className='object-cover aspect-[2/3]'
                    src={book.cover}
                    alt={`cover of the movie ${book.title}`}
                  />
                  <button onClick={() => removeFromList(book)} className='absolute bottom-16 right-2 rounded-sm p-1 px-2 cursor-pointer z-10 bg-red-500  flex'>
                    remove
                  </button>
                </div>
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
        </ul>
      </section>
    </>
  )
}

export default List
