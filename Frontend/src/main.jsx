import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import Entry from './Entry'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Entry/>
    </HashRouter>

  </StrictMode>,
)
