import React from 'react' 
import styles from './Footer.module.css'
import {BiCopyright} from 'react-icons/bi'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <p><BiCopyright /> Copyright 2022 yinotherhino</p>
    </footer>
  )
}

export default Footer