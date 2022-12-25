import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Loader from './components/Loader/Loader';

const App = () => {
  const [loading, setLoading] = useState(false)

  const loader = ()=>{
    return setLoading(true)
  }
  setTimeout(loader, 1500)

  return (
    <>
    {loading === false ? <Loader /> : (
      <>
    <Navbar />
    <Main />
    </>
    )}
    </>
  )
}

export default App
