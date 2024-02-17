import { useContext, useRef, useState } from 'react'
import { INITIAL_LENGHT } from '../constants'
import { FilterContext } from './../context/filter'

export const useInfinite = () => {
  const [quantity, setQuantity] = useState(INITIAL_LENGHT)

  const addMore = () => {
    const newQuantity = quantity + INITIAL_LENGHT
    setQuantity(newQuantity)
  }

  return { addMore, quantity }
}
