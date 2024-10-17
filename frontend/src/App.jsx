import './App.css'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import MyTheme from './components/themes/MyTheme'

function App() {

  return (
    <>
      <ThemeProvider theme={MyTheme}>
          <Navbar
            content={
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
              </Routes>
            }
          />
      </ThemeProvider>
      
    </>
  )
}

export default App