import React from 'react'
import styles from './Chat.module.css'
import {AiOutlineSend} from 'react-icons/ai'

const Chat = () => {
  return (
    <>
    
    <div className={styles.chatContainer}>
        <p>
            Message
        </p>
        <textarea placeholder="Type message..." name="msg" required></textarea>

       <AiOutlineSend className={styles.sendbtn} />

    </div>
    </>
  )
}

export default Chat