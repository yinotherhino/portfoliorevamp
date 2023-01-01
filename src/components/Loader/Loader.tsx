import React, { useEffect, useState } from 'react'
import styles from './Loader.module.css'
import TypeWriterEffect from 'react-typewriter-effect';

const Loader = () => {
  const welcomeTxt = 'Welcome to my portfolio page';

  return (
    <>
    <div className={styles.loadcontainer}>
    <TypeWriterEffect
      startDelay={100}
      cursorColor="black"
      text={welcomeTxt}
      typeSpeed={50}
      eraseSpeed={50}
    />
    <br />

    <div className={styles.loader}> </div>
    </div>
    </>
  )
}

export default Loader