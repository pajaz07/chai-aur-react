import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './componenets/Home/Home.jsx'
import About from './componenets/About/About.jsx'
import Contact from './componenets/ContactUs/ContactUs.jsx'
import Parth from './componenets/Parth/Parth.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contactus",
        element: <Contact />
      },
      {
        path: "parth/:userid",
        element: <Parth />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
