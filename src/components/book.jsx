/* eslint-disable react/prop-types */
import React from 'react'

export function Book ({ handleCardClick, books }) {
  return (
    <>
      <li
        className='book relative'
        onClick={() => handleCardClick(books, event)}
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
    </>
  )
}
