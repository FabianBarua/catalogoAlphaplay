import { useState, useEffect, useContext } from 'react'
import { TYPES } from '../constants'
import * as vodMock from '../mocks/vod.json'
import * as seriesMock from '../mocks/series.json'
import { FilterContext } from '../context/filter'

export const useContent = () => {
  const [contentResponse, setContentResponse] = useState([])
  const { type } = useContext(FilterContext)
  useEffect(() => {
    // TODO fetch a api
    const { default: response } = type === TYPES.movies ? vodMock : seriesMock
    const mapped = mappedResponse(response)
    setContentResponse(mapped)
  }, [type])

  const mappedResponse = response =>
    response.map(
      ({
        series_id,
        stream_id,
        name,
        stream_icon,
        cover,
        rating_5based,
        last_modified,
        added,
        category_id
      }) => {
        const mapped = {
          id: series_id || stream_id,
          name,
          image: stream_icon || cover,
          rating: rating_5based,
          last_modified: last_modified || added,
          category_id
        }
        return mapped
      }
    )

  return { contentResponse, setContentResponse }
}
