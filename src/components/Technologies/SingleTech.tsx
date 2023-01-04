import React from 'react'
import styles from './Technologies.module.css'


const SingleTech = ({imgUrl, color, icon, text}:{imgUrl?:string; color:string; icon?:string; text?:string}) => {
  return (
    <span className={styles.singlecontainer}>
    {icon !== undefined ? (<i className={icon + " " +styles.icon} style={{color}}>
    </i>) : <img src={imgUrl} className={styles.iconimg} />} 
    <span className={styles.span}>{text}</span>
    </span>
  )
}

export default SingleTech