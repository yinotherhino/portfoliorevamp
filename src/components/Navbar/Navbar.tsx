import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { ButtonComp } from "../Buttons/Buttons";
import styles from "./Navbar.module.css";

const NavbarComp = () => {
  const gotoCV = () => {
    window.location.href =
      "https://docs.google.com/document/d/14RxLDZPv78fzyHNcUJwKcmyytYBabV2x/edit?usp=sharing&ouid=108991479419238103699&rtpof=true&sd=true";
  };
  // initiate download file
  // const cvGen= ()=>{
  //   fetch('cv.pdf').then(response => {

  //     response.blob().then(blob => {
  //         const fileURL = window.URL.createObjectURL(blob);
  //         let alink = document.createElement('a');
  //         alink.href = fileURL;
  //         alink.download = 'cv.pdf';
  //         alink.click();
  //     })

  // })
  // }
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{
        backgroundColor: "#0A2647",
        boxShadow:
          "rgba(0, 0, 50, 0.25) 0px 14px 28px, rgba(0, 0, 150, 0.22) 0px 10px 10px",
      }}
      variant="dark"
      className={styles.navContainer + " px-md-5 px-sm-3 px-2"}
    >
      <Container fluid className="px-0">
        <Navbar.Brand className="me-5">
          <Link to="/">
            <span className={styles.brand}>Yinotherhino</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="https://docs.google.com/document/d/14RxLDZPv78fzyHNcUJwKcmyytYBabV2x/edit?usp=sharing&ouid=108991479419238103699&rtpof=true&sd=true"
              // onClick={() => cvGen()}
              className="me-3"
            >
              CV
            </Nav.Link>
            {/* <Nav.Item className='me-3'>CV</Nav.Item> */}
            <NavDropdown
              className="me-3"
              title="Projects"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Header>
                Authenticated backend service
              </NavDropdown.Header>
              <NavDropdown.Item href="https://github.com/yinotherhino/Express-Rest-Api/tree/main/convert_To_Mongo">
                Rest API
              </NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/yinotherhino/graphql_efosa">
                Graphql API
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Header>NAP stack </NavDropdown.Header>
              <NavDropdown.Item href="https://seams-weathered.netlify.app/">
                Weather app
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Header>MERN stack </NavDropdown.Header>
              <NavDropdown.Item href="https://foodorderring.netlify.app/">
                Food ordering app
              </NavDropdown.Item>

              <NavDropdown.Item href="https://smooze.netlify.app/">
                Music app
              </NavDropdown.Item>

              <NavDropdown.Divider />

              {/* <NavDropdown.Item> */}
              <Link to="/projects" className="dropdown-item">
                More
              </Link>
              {/* </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
