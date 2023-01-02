import { useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/Navbar/Navbar';
import { LoadProvider } from './components/context/LoadContext';

const App = () => {
  
  return (
    <>
    <LoadProvider>
    <Navbar />
    <Routes>

    <Route path='/' element={<Home />} />

    <Route path='/projects' element={<Projects />} />

    </Routes>
    </LoadProvider>
    </>
  )
}

export default App
