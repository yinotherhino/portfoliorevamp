import React from 'react'
import SingleTech from './SingleTech'
import styles from './Technologies.module.css'

const techDatas= [
    {
        icon:"fa-brands fa-node",
        color:"#3c873a",
        text: "Node"
    },
    {
        text: "python",
        icon:"fa-brands fa-python",
        color:"#4B8BBE"
    },
    {
        text: "react",
        icon:"fa-brands fa-react",
        color:"#61DBFB"
    },
    {
        text: "docker",
        icon:"fa-brands fa-docker",
        color:"#0db7ed"
    },
    {
        text: "css",
        icon: "fa-brands fa-css3-alt",
        color:"#264de4"
    },
    
    {
        text: "html",
        icon:"fa-brands fa-html5",
        color:"#e34c26"
    },
    {
        text: "typescript",
        color:"#3c873a",
        imgUrl: "https://res.cloudinary.com/dcrpfxivl/image/upload/v1672821523/ts_vlh3gp.png"
    },
    {
        imgUrl:"https://res.cloudinary.com/dcrpfxivl/image/upload/v1672821765/sequelize_cym1g7.png",
        color:"#4B8BBE"
    },
    {
        imgUrl:"https://res.cloudinary.com/dcrpfxivl/image/upload/v1672821827/mongodb_z4tc4m.png",
        color:"#61DBFB"
    }
]
const Technologies = () => {
  return (
    <div className={styles.container}>
        <p className={styles.techs}>
            Technologies and tools
        </p>
    
        {
            techDatas.map((techData)=>{
                return (
                <SingleTech icon={techData.icon} color={techData.color} imgUrl={techData.imgUrl} />
                )
            })

        }
    </div>
  )
}

export default Technologies