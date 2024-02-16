// utils.js
import { TYPES, SORTBY } from './../constants'
export const parseUrlType = (param, defaultValue) => {
  const urlParams = new URLSearchParams(window.location.search)
  const paramValue = urlParams.get(param)

  return paramValue || defaultValue
}

export const getTypeFromUrl = () => {
  const typeParam = parseUrlType('t', null)
  return TYPES[typeParam] || TYPES.default
}

export const getSortBy = () => {
  const sortParam = parseUrlType('s', null)
  return SORTBY[sortParam] || SORTBY.default
}
