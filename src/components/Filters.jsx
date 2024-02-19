import { FilterContext } from '../context/filter'
import { useCategories } from '../hooks/useCategories'
import { useContext } from 'react'
import { TYPES_OF_STREAMS, initialFilter } from './../constants'
import {
  Autocomplete,
  AutocompleteItem,
  Input,
  Select,
  SelectItem
} from '@nextui-org/react'
import { getTypeFromUrl } from '../utils/utils'
import { useDebouncedCallback } from 'use-debounce'

export const SearchIcon = (props) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
)

export const Filters = () => {
  const { type, setFilters, filters, searchByText, updateType } =
    useContext(FilterContext)

  const { categories } = useCategories({ type })

  const onSelectionChange = (id) => {
    if (id === null) id = initialFilter.category_id

    setFilters({ ...filters, category_id: id })
  }

  const debounced = useDebouncedCallback(
    (text) => {
      searchByText(text)
    },
    1000
  )

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
      <Input
        id="myInput"
        onValueChange={(text) => {
          debounced(text)
        }}
        size="sm"
        placeholder="Escreva para pesquisar..."
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
      />

      <Select
        label="Stream"
        placeholder="Stream"
        defaultSelectedKeys={[getTypeFromUrl()]}
        className=" w-full"
        size="sm"
        onSelectionChange={(id) => {
          updateType(id.currentKey)
        }}
      >
        {TYPES_OF_STREAMS.map((type) => (
          <SelectItem key={type.id} value={type.id}>
            {type.name}
          </SelectItem>
        ))}
      </Select>

      <Autocomplete
        label="Categoria"
        className=" w-full"
        size="sm"
        onSelectionChange={onSelectionChange}
      >
        {categories.map((category) => (
          <AutocompleteItem key={category.category_id}>
            {category.category_name}
          </AutocompleteItem>
        ))}
      </Autocomplete>
    </div>
  )
}
