import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400  text-black  rounded-xl opacity-0.9 p-4 mb-6 '>Tailwind testing</h1>
    <Card laptop="Macbook" btntxt="Don't read" />
    <Card laptop="Aasus" btntxt="read"/>
     
    </>
  )
}

export default App
