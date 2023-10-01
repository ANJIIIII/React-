import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter,setcount]=useState(15)

const addvalue=()=>{
  setcount(counter+1);
  console.log(counter)
}

const subvalue=()=>{
  setcount(counter-1);
  console.log(counter)
}

  return (
    <>
   <h1>hey there!!</h1>
   <h1>Counter value :{counter}</h1>
   <button onClick={addvalue}>Add {counter}</button>
   <br/>
   <button onClick={subvalue}>Sub {counter}</button>
   <p>footer {counter}</p>
   </>
  )
}

export default App
