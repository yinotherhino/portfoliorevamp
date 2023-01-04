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

export const ButtonCompProject = ({link, text, icon, isLight, onClick, children}:{link:string; text:string; icon:string; isLight?:boolean; onClick?:React.MouseEventHandler<HTMLElement>; children?:React.ReactNode;})=>{
    let bootstrapStyles = " btn btn-lg btn-block "
    bootstrapStyles += isLight ? "btn-outline-dark buttons" : "btn-dark buttons";
    return (
        <a target="_blank" href={link}>
            <button type="button" className={styles.projectbtn + bootstrapStyles}>
            <i className={icon}></i>{text}</button>
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
