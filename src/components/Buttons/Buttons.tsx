import styles from './Buttons.module.css'

export const ButtonComp = (props:{type:string, text:string; color?:string; isLight?:boolean})=>{
    const {type, text, isLight} = props;
    if(type === "Nobg"){
    return (
        <button className={styles.nobg}>
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

