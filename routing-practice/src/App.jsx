import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Word from './components/Word'
import Style from './components/Style'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:word" element={<Word/>}/>
        <Route path="/:word/:color1/:color2" element={<Style/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
