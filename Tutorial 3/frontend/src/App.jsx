import './App.css'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import DarkTheme from './components/themes/DarkTheme'
import LightTheme from './components/themes/LightTheme'
import GreenTheme from './components/themes/GreenTheme'
import Settings from './components/Settings'
import { useState } from 'react'

function App() {

  const options = [
    {name:"Dark theme", value: DarkTheme},
    {name:"Light theme", value: LightTheme},
    {name:"Green theme", value: GreenTheme},
  ]

  const [theme, setTheme] = useState(LightTheme);

  const handleFormChange = (event) => {
    setTheme(event.target.value);
    };

  console.log("What is the value", theme)

  return (
    <>
      <ThemeProvider theme={theme}>
          <Navbar
            content={
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/settings" element={<Settings options={options} value={theme} handleChange={handleFormChange}/>}/>
              </Routes>
            }
          />
      </ThemeProvider>
      
    </>
  )
}

export default App