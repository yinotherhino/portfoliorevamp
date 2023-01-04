import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/Navbar/NavbarComp';
import { LoadProvider } from './components/context/LoadContext';
import CV from './pages/CV';
import Chat from './components/Chat/Chat';

const App = () => {
  
  return (
    <Router>
    <LoadProvider>
    <Navbar />
    
    <Routes>

    <Route path='/' element={<Home />} />

    <Route path='/projects' element={<Projects />} />
    <Route path='/cv' element={<CV />} />

    </Routes>
    </LoadProvider>
    <Chat />
    </Router>
  )
}

export default App
