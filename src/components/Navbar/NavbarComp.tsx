import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const NavbarComp = () => {
  const cvGen= ()=>{
    fetch('cv.pdf').then(response => { 

      response.blob().then(blob => { 
          const fileURL = window.URL.createObjectURL(blob); 
          let alink = document.createElement('a');
          alink.href = fileURL; 
          alink.download = 'cv.pdf';
          alink.click();
      }) 

  }) 
  }
  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"#0A2647", boxShadow:"rgba(0, 0, 50, 0.25) 0px 14px 28px, rgba(0, 0, 150, 0.22) 0px 10px 10px"}} variant="dark" className={styles.navContainer + " px-md-5 px-sm-3 px-2"}>
      <Container fluid className='px-0'>
        <Navbar.Brand className='me-5'><Link to="/"><span className={styles.brand}>Yinotherhino</span></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={cvGen} className='me-3'>CV</Nav.Link>
            <NavDropdown className='me-3' title="Projects" id="collasible-nav-dropdown">
              <NavDropdown.Item href="https://github.com/yinotherhino/Express-Rest-Api/tree/main/convert_To_Mongo">
                Rest API
              </NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/yinotherhino/graphql">Graphql API</NavDropdown.Item>
              <NavDropdown.Item href="https://markazbaraje.org.ng">School website</NavDropdown.Item>
              <NavDropdown.Item href="https://young-coast-20585.herokuapp.com/">Metadata extraction app</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/yinotherhino/Ridex">Ride hailing app</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">
                UI Pages
              </NavDropdown.Item>
              <Link to="/projects" className='dropdown-item'>More</Link>
            </NavDropdown>
          </Nav>
          <Nav>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;