import React from 'react'
import styles from './Hello.module.css'

const Hello = () => {
  return (
    <div>
        <h1 className={styles.header}>
            Hello. I am Muhammed Bayero, A full-stack developer with 3+ years experience.
        </h1>
        <p className={styles.headerpara}>
            I have worked with various frameworks but I focus on MERN stack.
        </p>
    </div>
  )
}

export default Hello