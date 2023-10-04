/* eslint-disable react/prop-types */
import React from 'react'
import { FaPlay, FaPlus, FaX } from 'react-icons/fa6'

export function PopUp ({ menuPosition, addList, closePopup }) {
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
            <button className='flex items-center' onClick={addList}>
              <FaPlus className='mr-1' />
              Add to the list
            </button>
            <button className='flex items-center' onClick={closePopup}>
              <FaX className='mr-1 text-sm' />
              Close
            </button>
          </div>
        </>
  )
}
