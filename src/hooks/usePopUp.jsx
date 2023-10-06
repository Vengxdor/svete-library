import { useState } from 'react'
export function usePopUp () {
  const [menuPosition, setMenuPosition] = useState({ X: 0, Y: 0 })
  const [selectedBook, setSelectedBook] = useState(null)

  const handleCardClick = (book, event) => {
    const { clientX, clientY } = event
    // Look at the book that is clicked
    const clickedBook = event.currentTarget
    // get the point the coordinate that have being clicked
    const rect = clickedBook.getBoundingClientRect()

    // putting a limit to the popUp
    let clientMax = clientX
    const popUpWidth = 155
    if (clientX > window.innerWidth - popUpWidth) {
      clientMax = clientX - popUpWidth
    }
    const popUpPosition = {
      X: clientMax,
      Y: clientY - rect.top
    }

    setMenuPosition(popUpPosition)
    // get the information of the book clicked
    setSelectedBook(book)
  }

  const closePopup = () => {
    setSelectedBook(null)
  }

  return {
    menuPosition,
    handleCardClick,
    closePopup,
    selectedBook
  }
}
