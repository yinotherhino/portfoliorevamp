import React from 'react' 
import styles from './Footer.module.css'
import {BiCopyright} from 'react-icons/bi'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <p><BiCopyright /> Copyright 2022 yinotherhino</p>
    </div>
  )
}

export default Footer