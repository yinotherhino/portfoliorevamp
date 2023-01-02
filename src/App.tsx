import { useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/Navbar/Navbar';
import { LoadProvider } from './components/context/LoadContext';
import CV from './pages/CV';

const App = () => {
  
  return (
    <>
    <LoadProvider>
    <Navbar />
    <Routes>

    <Route path='/' element={<Home />} />

    <Route path='/projects' element={<Projects />} />
    <Route path='/cv' element={<CV />} />

    </Routes>
    </LoadProvider>
    </>
  )
}

export default App
