import React from 'react'
import styles from './Loader.module.css'
import TypeWriterEffect from 'typewriter-effect';

const Loader = () => {
  const welcomeTxt = 'Welcome to my portfolio page';

  return (
    <div className={styles.loadcontainer}>
        <TypeWriterEffect
          onInit={(typewriter) => {
            typewriter.typeString(welcomeTxt)
              .callFunction(() => {
                console.log('String typed out!');
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