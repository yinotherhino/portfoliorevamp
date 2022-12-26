import React from 'react'
import styles from './Dp.module.css'
import dpimg from '../../assets/dp.png'
import node from '../../assets/node.png'
import django from '../../assets/django.png'
import ts from '../../assets/typescript.png'
import react from '../../assets/react.png'
import docker from '../../assets/docker.png'
import mongo from '../../assets/mongo.png'




import Floatingimg from '../Floatingimg/Floatingimg'

const Dp = () => {
  return (
    <div className={styles.dpcontainer}>

        <div className={styles.rounded}>
            <Floatingimg src={node} positioning={{topmargin:"40%", leftmargin:"-30%"}} />
            <Floatingimg src={django} positioning={{topmargin:"20%", leftmargin:"-30%"}} />
            <Floatingimg src={docker} positioning={{topmargin:"20%", leftmargin:"100%"}} />
            <Floatingimg src={ts} positioning={{topmargin:"-5%", leftmargin:"-10%"}} />
            <Floatingimg src={react} positioning={{topmargin:"40%", leftmargin:"110%"}} />
            <Floatingimg src={mongo} positioning={{topmargin:"-5%", leftmargin:"80%"}} />


            <img src={dpimg} alt="muhammed bayero yinotherhino" className={styles.dpimg} />
        </div>
    </div>
  )
}

export default Dp