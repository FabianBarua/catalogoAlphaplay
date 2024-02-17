export const TYPES = { movies: 'movies', series: 'series', default: 'movies' }
export const TYPES_OF_STREAMS = [
  { id: TYPES.movies, type: 'vod', name: 'Filmes' },
  { id: TYPES.series, type: 'series', name: 'Seriés' }
]

export const SORTBY = { n: 'name', d: 'date', default: 'date' }

export const URLS_API = {
  getContent: {
    movies: '&action=get_vod_categories',
    series: '&action=get_series'
  },
  getCategories: {
    movies: '&action=get_vod_categories',
    series: '&action=get_series_categories'
  }
}

export const defaultCategory = {
  category_id: 'all',
  category_name: 'All',
  parent_id: 0
}

export const initialFilter = {
  category_id: 'all',
  name: null,
  min_rating: null,
  min_last_modified: null,
  results: 0
}

export const INITIAL_LENGHT = 20
