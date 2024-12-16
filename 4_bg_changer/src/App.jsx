import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {
  
  const [color, setColor] = useState("olive")
  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}}
      >
        <div className='fixed flex flex-wrap justify-center top-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button  onClick= {()=> setColor("lightgreen")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "lightgreen"}}>
              Green</button>
            <button onClick= {()=> setColor("deepskyblue")}  className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "deepskyblue"}}>
              Blue</button>
            <button onClick= {()=> setColor("palevioletred")}  className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "palevioletred"}}>
              Pink</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
