import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
