import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { ButtonComp } from '../Buttons/Buttons';
import styles from './Navbar.module.css';

const NavbarComp = () => {
  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"#0A2647", boxShadow:"rgba(0, 0, 50, 0.25) 0px 14px 28px, rgba(0, 0, 150, 0.22) 0px 10px 10px"}} variant="dark" className={styles.navContainer + " px-md-5 px-sm-3 px-2"}>
      <Container fluid className='px-0'>
        <Navbar.Brand className='me-5'><Link to="/"><span className={styles.brand}>Yinotherhino</span></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* {/* <Nav.Link href="#features" className='me-3'>About</Nav.Link> */}
            <Nav.Link href="/public/cv.pdf" className='me-3'>CV</Nav.Link>
            <NavDropdown className='me-3' title="Projects" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Authenticated backend service</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Rest API
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Graphql API</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                UI Pages
              </NavDropdown.Item>
              <NavDropdown.Item href="/projects">
                More
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
            {/* <Nav.Link eventKey={2} href="#memes">
              Programming jokes
            </Nav.Link> */}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;