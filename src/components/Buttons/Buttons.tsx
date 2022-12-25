import styles from './Buttons.module.css'

export const ButtonComp = (props:{type:string, text:string; color?:string;})=>{
    const {type, text} = props;
    if(type === "Nobg"){
    return (
        <button className={styles.nobg}>
            {text}
        </button>
    )
    }
    else{
        return (
        <button>
            {text}
        </button>
    )
    }
}
