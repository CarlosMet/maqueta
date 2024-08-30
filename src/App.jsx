import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Proyects from './components/Proyects'
import Historias from './components/Historias'
import Equipo from './components/Equipo'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Proyects />
      <Historias />
      <Equipo />
      <Footer />
    </>
  )
}

export default App
