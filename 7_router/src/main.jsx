import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/'
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouteProvider router={router} />
  </StrictMode>,
)
