import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';

const App = () => {
  
  return (
    <Routes>

    <Route path='/' element={<Home />} />

    <Route path='/projects' element={<Projects />} />

    </Routes>
  )
}

export default App
