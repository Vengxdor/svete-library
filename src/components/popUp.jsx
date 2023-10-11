/* eslint-disable react/prop-types */
import React from 'react'
import { FaCheck, FaPlay, FaPlus, FaX } from 'react-icons/fa6'

export function PopUp ({ menuPosition, addList, removeList, closePopup, selectedBook }) {
  const isBookInList = (bookToCheck) => {
    const storageBooks = JSON.parse(localStorage.getItem('listBooks')) || []
    return storageBooks.some(book => book.ISBN === bookToCheck.ISBN)
  }

  return (
    <>
      <div
        style={{ left: `${menuPosition.X}px`, top: `${menuPosition.Y}px` }}
        className='bg-white rounded-lg absolute z-10 p-2 flex items-start flex-col gap-1'
      >
        <button className='flex items-center'>
          <FaPlay className='mr-1 text-sm' />
          Preview
        </button>
        {addList &&
        <button onClick={addList}>
          {isBookInList(selectedBook)
            ? (
              <span className='flex items-center gap-1'>
                <FaCheck/>
                Added
              </span>
              )
            : (
              <span className='flex items-center gap-1'>
                <FaPlus/>
                Add to list
                </span>
              )
          }
        </button>
        }
        {removeList &&
        <button className='flex items-center' onClick={removeList}>
          <FaX className='mr-1' />
          Remove from list
        </button>
        }
        <button className='flex items-center' onClick={closePopup}>
          <FaX className='mr-1 text-sm' />
          Close
        </button>
      </div>
    </>
  )
}
