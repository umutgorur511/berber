import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppLayout from './AppLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppLayout/>
  </StrictMode>,
)
