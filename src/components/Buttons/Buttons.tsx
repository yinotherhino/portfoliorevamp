import React from 'react';
import styles from './Buttons.module.css'
import {AiOutlineWhatsApp} from 'react-icons/ai'

export const ButtonCompNobg = ({text, color, isLight, onClick, children}:{type:string, text:string; color?:string; isLight?:boolean; onClick?:React.MouseEventHandler<HTMLElement>; children?:React.ReactNode;})=>{
    return (
        <button className={styles.nobg}>
            {text}
        </button>
    )
}

export const ButtonCompChat = ({text,onClick}:{text:string;onClick?:React.MouseEventHandler<HTMLElement>;})=>{
    return (
        <button className={styles.nobg +" "+ styles.chat} onClick={onClick}>
            <AiOutlineWhatsApp className={styles.wtsp} />
             {text}
        </button>
    )
}

export const ButtonCompProject = ({text, isLight, onClick, children}:{text:string; isLight?:boolean; onClick?:React.MouseEventHandler<HTMLElement>; children?:React.ReactNode;})=>{
    return (
        <a target="_blank" href="https://github.com/yinotherhino/Express-Rest-Api/tree/main/convert_To_Mongo">
            <button type="button" className="btn btn-lg btn-block btn-outline-dark buttons">
            <i className="fa-brands fa-node"></i> Express Rest API</button>
        </a>
    )
}

export const ButtonCompLight = ({text}:{text:string;})=>{
    return(
        <button className={styles.lightbtn}>
            {text}
        </button>
    )
}

export const ButtonCompDark = ({text}:{text:string;})=>{
    return (
        <button className={styles.darkbtn}>
            {text}
        </button>
    )
}
