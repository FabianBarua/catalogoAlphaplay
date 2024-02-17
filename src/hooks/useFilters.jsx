import { useState } from 'react'
import { getTypeFromUrl, parseUrlType } from '../utils/utils'
import { TYPES, defaultCategory, initialFilter } from '../constants'

export const useFilters = () => {
  const [searchText, setSearchText] = useState('')
  const [type, setType] = useState(getTypeFromUrl)
  const [filters, setFilters] = useState(initialFilter)

  const filterContent = content => {
    const newContent = content.filter(({ category_id, name }) => {
      const isCategoryMatch =
        category_id === filters.category_id ||
        filters.category_id === defaultCategory.category_id

      const isTextMatch = name.toLowerCase().includes(searchText.toLowerCase())

      return isCategoryMatch && isTextMatch
    })

    return newContent
  }

  const updateType = newType => {
    const typeParam = parseUrlType('t', null)

    const updatedType = TYPES[newType] || TYPES.default

    const updateStateAndUrl = () => {
      const searchParams = new URLSearchParams(window.location.search)
      searchParams.set('t', updatedType)
      const newUrl = `${window.location.pathname}?${searchParams.toString()}`
      window.history.replaceState({}, '', newUrl)
      setType(updatedType)
      setFilters({ ...filters, category_id: defaultCategory.category_id })
    }

    if (typeParam === null) {
      updateStateAndUrl()
    } else {
      const searchParams = new URLSearchParams(window.location.search)
      searchParams.delete('t')
      updateStateAndUrl()
    }
  }

  const searchByText = text => {
    setSearchText(text)
  }

  return {
    type,
    setType,
    filters,
    setFilters,
    filterContent,
    searchByText,
    updateType
  }
}
