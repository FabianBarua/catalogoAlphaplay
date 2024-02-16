import { useEffect, useState } from 'react'

import * as vodCategories from '../mocks/vodCategories.json'
import * as seriesCategories from '../mocks/seriesCategories.json'
import { TYPES, defaultCategory } from '../constants'

export const useCategories = ({ type }) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    // TODO fetch a api
    const { default: categoriesForContent } =
      type === TYPES.movies ? vodCategories : seriesCategories
    const categoriesWithDefault = [defaultCategory, ...categoriesForContent]

    setCategories(categoriesWithDefault)
  }, [type])

  return { categories }
}
