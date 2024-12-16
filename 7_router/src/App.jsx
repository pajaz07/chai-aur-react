import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Home from './components/home/home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-600 p-4'>Router</h1>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App
