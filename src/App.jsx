import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Myproject from './components/My projects/Myproject'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/navbar' element={<Navbar/>}/>
        <Route path='/hero' element={<Hero/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/experience' element={<Services/>}/>
        <Route path='/work' element={<Myproject/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/footer' element={<Footer/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
