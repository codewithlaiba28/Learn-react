import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App