import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15) //hook used for propagation in all places

  // let counter = 5
  const addVal = ()=>{
    counter++
    setCounter(counter)
  }

  const subVal = ()=>{
    counter--
    setCounter(counter>0?counter:0)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter value: {counter}</h2>

      <button
      onClick={addVal}
      >add</button>
      <br />
      <button onClick={subVal}>sub</button>
    </>
  )
}

export default App
