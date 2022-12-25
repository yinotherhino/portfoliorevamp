import React from 'react'
import styles from './Floatingimg.module.css'
const Floatingimg = (props:{src:string; positioning:{topmargin:string; leftmargin:string}}) => {
    const {src, positioning:{topmargin, leftmargin} } = props
  return (
    <img src={src} className={styles.img} style={{top:topmargin, left:leftmargin}} />
  )
}

export default Floatingimg