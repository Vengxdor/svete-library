import React from 'react'
import Tittle from '../components/tittle'
import Filter from '../components/filter'
import Books from '../books.json'

function AllBooks () {
  const library = Books.library

  return (
    <>
      <Tittle>All Books</Tittle>
      <Filter />

      <section className='mt-10 w-full'>
        <ul className='books'>
          {library.map((books, index) => {
            books = books.book
            return (
              <li className='book' key={index}>
                <img className='object-cover aspect-[2/3]' src={books.cover} alt={`cover of the movie ${books.title}`} />
                <h4 className='truncate'>{books.title}</h4>
                <p>{books.genre}</p>
                <span>{`${books.author.name} • ${books.year}`}</span>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}

export default AllBooks
