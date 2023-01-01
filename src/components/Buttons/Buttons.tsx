import React from 'react';
import styles from './Buttons.module.css'

export const ButtonComp = (props:{type:string, text:string; color?:string; isLight?:boolean; onClick?:React.MouseEventHandler<HTMLElement>})=>{
    const {type, text, isLight} = props;
    if(type === "Nobg"){
    return (
        <button className={styles.nobg}>
            {text}
        </button>
    )
    }
    else if(type === "chat"){
        return (
            <button className={styles.nobg +" "+ styles.chat} onClick={props.onClick}>
                {text}
            </button>
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

