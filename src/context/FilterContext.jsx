/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react'

export const FilterContex = createContext()

export function FilterProvider ({ children }) {
  const [filters, setFilters] = useState({
    genre: 'All',
    minPages: 0
  })
  return (
    <FilterContex.Provider value={{ setFilters, filters }}>
        {children}
    </FilterContex.Provider>
  )
}
