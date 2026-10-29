import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/* Flaticon Uicons — Regular Rounded + Brands only */
import '@flaticon/flaticon-uicons/css/regular/rounded.css'
import '@flaticon/flaticon-uicons/css/brands/all.css'

import './styles/global.css'
import './styles/layout.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
