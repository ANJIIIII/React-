
import { useEffect, useState } from 'react'
import './App.css'
import Card from './componenets/Card'
import ThemeBtn from './componenets/ThemeBtn'
import { ThemeProvider } from './contexts/theme'

function App() {
 const [themeMode, setThemeMode]=useState("light")
 const lightTheme=()=>{
  setThemeMode("light")
 }

 const darkTheme=()=>{
  setThemeMode("dark")
 }

 //actual chng in theme 
 useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
 }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>
                    <div className="w-full max-w-sm mx-auto">
                    <Card>
                      <h1>i am anjali , iam  going to develop an application based on react</h1>
                      <span>React based project!</span>
                    </Card>
                      <Card/> 
                    </div>
                </div>
            </div>
</ThemeProvider>
  )
}

export default App
