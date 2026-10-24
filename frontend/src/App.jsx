import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'


function App() {
  

  return (
    <>
   <Router>
    <Navbar />
    <br />
    <br />
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
   </Router>
    </>
  )
}

export default App
