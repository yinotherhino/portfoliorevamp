import React from 'react';
import styles from './Buttons.module.css'
import {AiOutlineWhatsApp} from 'react-icons/ai'

export const ButtonComp = ({type, text, color, isLight, onClick, children}:{type:string, text:string; color?:string; isLight?:boolean; onClick?:React.MouseEventHandler<HTMLElement>; children?:React.ReactNode;})=>{
    if(type === "Nobg"){
    return (
        <button className={styles.nobg}>
            {text}
        </button>
    )
    }
    else if(type === "chat"){
        return (
            <button className={styles.nobg +" "+ styles.chat} onClick={onClick}>
                <AiOutlineWhatsApp className={styles.wtsp} />
                 {text}
            </button>
        )
    }
    else if(type === "project"){
        return (
            // <button className={styles.nobg +" "+ styles.project} onClick={onClick}>
                
            //     {children}
            //      {text}
            // </button>
            <a target="_blank" href="https://github.com/yinotherhino/Express-Rest-Api/tree/main/convert_To_Mongo">
                <button type="button" className="btn btn-lg btn-block btn-outline-dark buttons">
                <i className="fa-brands fa-node"></i> Express Rest API</button>
            </a>
        )
    }
    else if(isLight === true){
        return(
            <button className={styles.lightbtn}>
                {text}
            </button>
        )
    }
    else{
        return (
        <button className={styles.darkbtn}>
            {text}
        </button>
    )
    }
}

