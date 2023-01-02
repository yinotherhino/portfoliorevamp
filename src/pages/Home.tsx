import React, {useContext} from 'react'
import { LoadContext, LoadInterface } from '../components/context/LoadContext'
import Loader from '../components/Loader/Loader'
import Main from '../components/Main/Main'


const Home = () => {
  // const firstLoad = useRef(0);
  //   const [loading, setLoading] = useState(false)

  const {loaded, setLoaded} = useContext(LoadContext) as LoadInterface;

    const loader = ()=>{
      return setLoaded(1)
    }
    
    setTimeout(loader, 2000)
  
    return (
      <>
      {loaded === 0  ? <Loader /> : (
        <> 
      <Main />
      </>
      )}
      </>
    )  
}

export default Home