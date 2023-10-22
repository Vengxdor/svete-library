/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react'

// 1. create the context
export const ListContext = createContext()

// 2. create the provider
export function ListProvider ({ children }) {
  // Initialize the list from localStorage if it exists, or as an empty array if not
  const [listOfBooks, setListOfBooks] = useState(() => {
    const storageBooks = JSON.parse(localStorage.getItem('listOfBooks'))
    return storageBooks || []
  })

  useEffect(() => {
    localStorage.setItem('listOfBooks', JSON.stringify(listOfBooks)) // each time that the array change the value, is going to the localStorage
  }, [listOfBooks])

  const addToList = book => {
    // if there's a book with the same id
    const isBookInlist = listOfBooks.some(
      (bookInList) => bookInList.ISBN === book.ISBN
    )
    if (isBookInlist) return

    setListOfBooks(prevList => {
      return [...prevList, book]
    })
  }

  const removeFromList = book => {
    const updatedList = listOfBooks.filter(bookInList => bookInList.ISBN !== book.ISBN)
    setListOfBooks(updatedList)
    localStorage.removeItem('listOfBooks')
  }

  return (
        <ListContext.Provider value={{ listOfBooks, addToList, setListOfBooks, removeFromList }}>
            {children}
        </ListContext.Provider>
  )
}
