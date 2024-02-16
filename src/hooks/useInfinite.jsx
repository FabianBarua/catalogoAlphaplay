import { useRef, useState } from 'react'
import { INITIAL_LENGHT } from '../constants'

export const useInfinite = ({ filteredContent }) => {
  const [quantity, setQuantity] = useState(INITIAL_LENGHT)
  const hasMore = useRef(true)

  console.log(quantity)
  console.log(filteredContent.length)

  console.log(hasMore)

  const addMore = () => {
    const newQuantity = quantity + INITIAL_LENGHT
    if (newQuantity >= filteredContent.length) {
      hasMore.current = false
    } else {
      hasMore.current = true
    }
    setQuantity(newQuantity)
  }

  return { addMore, hasMore: hasMore.current, quantity }
}
