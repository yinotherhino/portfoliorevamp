import React from 'react'
import styles from './Main.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hello from '../Hello/Hello';
import SocialLinks from '../SocialLinks/SocialLinks';

const Main = () => {
  return (
    <main className={styles.container}>
    <Container fluid>
      <Row>
        <Col md={6} sm={12} className={styles.firstColumn + " px-5 pt-md-5"}>
        <Hello />

        <SocialLinks />
        </Col>
        <Col md={6} sm={12}  className={styles.secondColumn + " px-5 pt-md-5"}>
        Hello
        </Col>
      </Row>
    </Container>
    </main>
  )
}

export default Main