import React, { useEffect, useState } from 'react'
import styles from './Loader.module.css'

const Loader = () => {

  const [welcome, setWelcome] = useState("")
  const welcomeTxt = 'Welcome to my portfolio page';
  let word = ""
  const first_text = "const sayHello = () = {";
  const second_text = "console.log('hello')";
  const third_text = "//This prints out Hello World";

  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [i, seti] = useState(0)
  const textState = ["istyping", "isdeleting"];
  const [typing, setTyping] = useState(textState[0]);
  
  function sleep(ms:number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const myInterval = setInterval(seti, 500, (i+1))

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typing === "istyping" && text1 !== first_text) {
        setText1(first_text.slice(0, text1.length + 1));
      }
      else if (text1 === first_text && typing === "istyping"){
        sleep(2000).then(()=>{
        setTyping(textState[1])
        })
      }
      else if ( (text1 === first_text && typing==="isdeleting") || typing === "isdeleting" ) {
        setText1(first_text.slice(0, text1.length - 1));
        if(text1.length<=2){
            setTyping(textState[0])
        }
      }
    }, 100);
  return () => clearTimeout(timeout);
}, [text1, typing1]);

  return (
    <>
    <h1>
      {welcome}
      {/* djvdkjkdhkgjkdsjhk */}
    </h1>

    <div className={styles.loadcontainer}>
        <h1>

        </h1>
        <div className={styles.loader}>

        </div>
    </div>
    </>
  )
}

export default Loader