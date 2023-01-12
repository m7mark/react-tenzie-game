import React from 'react'
import { createRoot } from 'react-dom/client'
import './assets/global.css'
import { Home } from './components/Home'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement as HTMLElement)

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
