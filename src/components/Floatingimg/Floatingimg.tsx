import React from 'react'
import styles from './Floatingimg.module.css'
const Floatingimg = (props:{src:string; positioning:{topmargin?:string; leftmargin?:string; bottommargin?:string; rightmargin?:string}}) => {
    const {src, positioning:{topmargin, leftmargin,rightmargin, bottommargin} } = props
  return (
    <img src={src} className={styles.img} style={{top:topmargin, left:leftmargin, bottom:bottommargin, right:rightmargin}} />
  )
}

export default Floatingimg