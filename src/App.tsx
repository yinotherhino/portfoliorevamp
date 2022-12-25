import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Main />
    </>
  )
}

export default App
