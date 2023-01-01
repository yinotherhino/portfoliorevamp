import React, { useState } from 'react'
import styles from './Main.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hello from '../Hello/Hello';
import SocialLinks from '../SocialLinks/SocialLinks';
import { ButtonComp } from '../Buttons/Buttons';
import GithubStats from '../GithubStats/GithubStats';
import Footer from '../Footer/Footer';
import Dp from '../Dp/Dp';
import Chat from '../Chat/Chat';

const Main = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <main className={styles.container}>
    <Container fluid>
      <Row>
        <Col md={6} sm={12} className={styles.firstColumn + " px-md-5 pt-md-5 px-sm-3"}>
        
        <div className={styles.m200px}>
          <Hello />
          <div className={styles.hiresocials}>
            <ButtonComp text="Hire me!" type="hire" />
            <div className={styles.socials}><SocialLinks /></div>
          </div>
          <div className={styles.github}>
          <a href='https://github.com/yinotherhino'> <GithubStats /> </a>
          </div>
        </div>
        
        </Col>

        <Col md={6} sm={12}  className={styles.secondColumn + " px-md-5 pt-md-5"}>
        <Dp />
        <img src="https://www.codewars.com/users/YinotheRhino/badges/large" alt="Yinotherhino Codewars Badge" className={styles.codewars} />
        {isChatOpen && <Chat />}
        <ButtonComp type="chat" text='Chat' onClick={()=>{setIsChatOpen(!isChatOpen)}} />
        <Footer />
        </Col>
       
      </Row>
    </Container>
    </main>
  )
}

export default Main