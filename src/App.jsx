import { Filters } from './components/Filters'
import { useFilters } from './hooks/useFilters'
import { useContent } from './hooks/useContent'
import { Infinite } from './components/InifiniteScroll'
import { ThemeSwitcher } from './components/ThemeSwitcher'
import { useContext } from 'react'
import { FilterContext } from './context/filter'

function App () {
  const { type, filterContent } = useContext(FilterContext)
  const { contentResponse } = useContent({ type })
  const filteredContent = filterContent(contentResponse)

  return (
    <>
      <main className='max-w-5xl mx-auto  mt-16 font-custom  '>
        <ThemeSwitcher className=' fixed z-30 right-4 top-4' />
        <header className=' px-4 '>
          <h1 className=' bg-foreground-100 rounded-lg text-foreground-600 font-semibold py-8 w-full text-center my-6 text-2xl '>
            Catalogo Alphaplay 🚀
          </h1>
          <Filters />
        </header>
        <Infinite filteredContent={filteredContent}></Infinite>
      </main>
    </>
  )
}

export default App
