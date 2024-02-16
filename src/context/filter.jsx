import { createContext, useState } from 'react'
import { initialFilter } from '../constants'
import { useFilters } from '../hooks/useFilters'
export const FilterContext = createContext(initialFilter)

export const FilterProvider = ({ children }) => {
  const {
    type,
    setType,
    filters,
    setFilters,
    filterContent,
    searchByText,
    updateType
  } = useFilters()

  return (
    <FilterContext.Provider
      value={{
        type,
        setType,
        filters,
        setFilters,
        filterContent,
        searchByText,
        updateType
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
