import { useContext } from 'react'
import { ListContext } from '../context/ListContext'

export function useList () {
  const { listOfBooks, addToList, removeFromList } = useContext(ListContext)

  if (listOfBooks === undefined) {
    throw new Error('useList must be used within a ListProvider')
  }

  const checkBookInList = (book) => {
    return listOfBooks.some(item => item.ISBN === book.ISBN)
  }

  return { listOfBooks, addToList, checkBookInList, removeFromList }
}
