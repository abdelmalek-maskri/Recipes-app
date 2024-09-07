import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {router} from './router.jsx'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
