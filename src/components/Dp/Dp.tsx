import React from 'react'
import styles from './Dp.module.css'
import dpimg from '../../assets/dp.png'
import node from '../../assets/node.png'
import django from '../../assets/django.png'
import ts from '../../assets/typescript.png'


import Floatingimg from '../Floatingimg/Floatingimg'

const Dp = () => {
  return (
    <div className={styles.dpcontainer}>

        <div className={styles.rounded}>
            <Floatingimg src={node} positioning={{topmargin:"50%", leftmargin:"-30%"}} />
            <Floatingimg src={django} positioning={{topmargin:"20%", leftmargin:"-30%"}} />

            <Floatingimg src={ts} positioning={{topmargin:"-5%", leftmargin:"-10%"}} />

            <img src={dpimg} alt="muhammed bayero yinotherhino" className={styles.dpimg} />
        </div>
    </div>
  )
}

export default Dp