// src/main.jsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { HabitsProvider } from './contexts/HabitsContext'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <HabitsProvider>
        <App />
      </HabitsProvider>
    </HashRouter>
  </StrictMode>
)
