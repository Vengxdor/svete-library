import { useEffect, useState } from 'react'

export function useList (selectedBook) {
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

  const removeList = () => {
    // Remove the book from the list state
    const updatedList = list.filter((bookInList) => bookInList.ISBN !== selectedBook.ISBN)
    setList(updatedList)

    // Update local storage
    localStorage.setItem('listBooks', JSON.stringify(updatedList))
  }

  return { addList, removeList }
}
