import React, {useState} from 'react'
import Loader from '../components/Loader/Loader'
import Main from '../components/Main/Main'
import Navbar from '../components/Navbar/Navbar'


const Home = () => {
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

export default Home