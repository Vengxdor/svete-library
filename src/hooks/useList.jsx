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
    const isBookInlist = list.some(
      (bookInList) => bookInList.ISBN === selectedBook.ISBN
    )
    if (isBookInlist) {
      // If the book is already in the list, remove it
      const updatedList = list.filter(
        (bookInList) => bookInList.ISBN !== selectedBook.ISBN
      )
      setList(updatedList)
    } else {
      // If the book is not in the list, add it
      setList([...list, selectedBook])
    }
  }

  return { addList, removeList }
}
