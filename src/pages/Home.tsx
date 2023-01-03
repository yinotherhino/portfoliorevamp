import React, {useContext} from 'react'
import { LoadContext, LoadInterface } from '../components/context/LoadContext'
import Loader from '../components/Loader/Loader'
import Main from '../components/Main/Main'


const Home = () => {

  const {loaded, setLoaded} = useContext(LoadContext) as LoadInterface;

    return (
      <div>
      {loaded === 0  ? (<Loader />) : (<Main />)}
      </div>
    )  
}

export default Home