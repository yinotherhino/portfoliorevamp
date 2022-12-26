import React from 'react'
import styles from './Dp.module.css'
import dpimg from '../../assets/dp.png'
import node from '../../assets/node.png'
import django from '../../assets/django.png'
import ts from '../../assets/typescript.png'
import react from '../../assets/react.png'
import docker from '../../assets/docker.png'
import mongo from '../../assets/mongo.png'
import html from '../../assets/html.png'
import css from '../../assets/css.webp'
import python from '../../assets/python.png'





import Floatingimg from '../Floatingimg/Floatingimg'

const Dp = () => {
  return (
    <div className={styles.dpcontainer}>
      <Floatingimg src={ts} positioning={{topmargin:"15%", leftmargin:"20%"}} />
      <Floatingimg src={node} positioning={{topmargin:"25%", leftmargin:"12%"}} />
      <Floatingimg src={django} positioning={{topmargin:"35%", leftmargin:"20%"}} />

      <Floatingimg src={docker} positioning={{topmargin:"7%", leftmargin:"35%"}} />

      
      <Floatingimg src={mongo} positioning={{topmargin:"40%", leftmargin:"25%"}} />

      <Floatingimg src={html} positioning={{topmargin:"7%", rightmargin:"35%"}} />
      
      <Floatingimg src={python} positioning={{topmargin:"15%", rightmargin:"20%"}} />
      <Floatingimg src={react} positioning={{topmargin:"25%", rightmargin:"12%"}} />
      <Floatingimg src={css} positioning={{topmargin:"35%", rightmargin:"20%"}} />

      <div className={styles.rounded}>
        <img src={dpimg} alt="muhammed bayero yinotherhino" className={styles.dpimg} />
      </div>
    </div>
  )
}

export default Dp