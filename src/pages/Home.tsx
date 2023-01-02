import React, {useRef, useState} from 'react'
import Loader from '../components/Loader/Loader'
import Main from '../components/Main/Main'
import Navbar from '../components/Navbar/Navbar'


const Home = () => {
    const [loading, setLoading] = useState(false)
    const firstLoad = useRef(0)

    const loader = ()=>{
      firstLoad.current = 1;
      return setLoading(true)
    }
    setTimeout(loader, 2000)
  
    return (
      <>
      <Navbar />
      {firstLoad.current === 0 && loading === false ? <Loader /> : (
        <> 
      <Main />
      </>
      )}
      </>
    )  
}

export default Home