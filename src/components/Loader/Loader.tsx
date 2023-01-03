import React, { useContext } from 'react'
import styles from './Loader.module.css'
import TypeWriterEffect from 'typewriter-effect';
import { LoadContext, LoadInterface } from '../context/LoadContext';

const Loader = () => {
  const { setLoaded } = useContext(LoadContext) as LoadInterface;

  return (
    <div className={styles.loadcontainer}>
        <TypeWriterEffect
          onInit={(typewriter) => {
            typewriter.typeString(`<span style="font-size:30px;font-family:'Roboto', sans-serif; font-weight:700;">Welcome to my portfolio page</span>`)
              .callFunction(() => {
                setTimeout(()=>{setLoaded(1)},100)
              })
              .start();
          }}
/>
    <br />

    <div className={styles.loader}> </div>
    </div>
  )
}

export default Loader