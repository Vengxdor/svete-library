/* eslint-disable react/prop-types */
import React from 'react'
import { useList } from '../hooks/useList'
import { useFiltered } from '../hooks/useFilter'
import Books from '../books.json'

export function BookList () {
  const { addToList, checkBookInList, removeFromList } = useList()
  const { filterBooks } = useFiltered()
  const library = Books.library

  const filteredBooks = filterBooks(library)
  return (
    <>
      <ul className='books relative'>
        {filteredBooks.map((entry) => {
          const book = entry.book
          const isBookInList = checkBookInList(book)
          return (
            <li key={book.ISBN} className='book relative w-[202px]'>
              <div>
                <img
                  className='object-cover aspect-[2/3]'
                  src={book.cover}
                  alt={`cover of the movie ${book.title}`}
                />
                {isBookInList
                  ? (
                  <button
                    className='absolute bottom-16 right-2 rounded-sm p-1 px-2 cursor-pointer z-10 bg-red-500 flex'
                    onClick={() => removeFromList(book)}
                  >
                    remove
                  </button>
                    )
                  : (
                  <button
                    className='absolute bottom-16 right-2 rounded-sm p-1 px-2 cursor-pointer z-10 bg-activeLight dark:bg-activeDark flex'
                    onClick={() => addToList(book)}
                  >
                    Add list
                  </button>
                    )}
              </div>
              <h4 className='truncate mt-2 dark:text-white'>{book.title}</h4>
              <span className='text-zinc-500'>{`${book.author.name} • ${book.year}`}</span>
              <span className='absolute inset-0 h-full w-full'>
                <span className='bg-activeLight p-1 m-1 rounded-md dark:bg-activeDark'>
                  {book.genre}
                </span>
              </span>
            </li>
          )
        })}
      </ul>
    </>
  )
}
