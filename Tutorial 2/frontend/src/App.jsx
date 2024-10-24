import './App.css'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import MyTheme from './components/themes/MyTheme'
import DarkTheme from './components/themes/DarkTheme'
import LightTheme from './components/themes/LightTheme'
import Settings from './components/Settings'
import { useState } from 'react'

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false)
  const handleChange = () => {
      setIsDarkMode(!isDarkMode)
  }

  const currentTheme = isDarkMode ? DarkTheme : LightTheme

  console.log(isDarkMode)

  return (
    <>
      <ThemeProvider theme={currentTheme}>
          <Navbar
            content={
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/settings" element={<Settings isDarkMode={isDarkMode} onChange={handleChange}/>}/>
              </Routes>
            }
          />
      </ThemeProvider>
      
    </>
  )
}

export default App