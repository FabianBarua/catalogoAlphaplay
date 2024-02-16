// main.tsx or main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import App from './App'
import './index.css'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { FilterProvider } from './context/filter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <NextThemesProvider attribute='class' defaultTheme='dark'>
        <FilterProvider>
          <App />
        </FilterProvider>
      </NextThemesProvider>
    </NextUIProvider>
  </React.StrictMode>
)
