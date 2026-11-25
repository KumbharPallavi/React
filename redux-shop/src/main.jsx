import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Arr from './Arr.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Arr />
  </StrictMode>,
)
