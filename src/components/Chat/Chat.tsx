import React, { useState } from 'react'
import styles from './Chat.module.css'
import {AiOutlineSend, AiOutlineClose, AiOutlineWhatsApp} from 'react-icons/ai'
import { ButtonCompChat } from '../Buttons/Buttons'

const Chat = () => {
  const [openChat, setOpenChat] = useState(false)
  const [msg, setMsg] = useState("")
  const submitChat = (e:React.MouseEvent<SVGElement>)=>{
    e.preventDefault();
    if(!msg){
      return;
    }
    const url = `http://wa.me/2348128200178?text=${msg}`
window.location.href = url;
  }

  // const 
  return (
    <>
      { openChat && ( <div className={styles.chatContainer}>
        <h3>
          <AiOutlineWhatsApp className={styles.wtsp} />
          <AiOutlineClose className={styles.closebtn} onClick={()=>{setOpenChat(false)}} />
        </h3>
        <p>
            Message
        </p>
        <textarea placeholder="Type message..." name="msg" required className={styles.textarea} onChange={(e)=>{setMsg(e.target.value)}}></textarea>
        <div>
          <AiOutlineSend className={styles.sendbtn} onClick={submitChat} />
          </div>
        </div>
        )}
      <ButtonCompChat text='Chat' onClick={()=>{setOpenChat(true)}} />
  </>
  )

}

export default Chat