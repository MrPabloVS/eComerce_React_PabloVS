
import CartWidget from "../CartWidget/CartWidget";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";


function Navegacion() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/"><Navbar.Brand href="#home"><CartWidget/></Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Stage" id="basic-nav-dropdown">
                <Link to="/stages/basic"><NavDropdown.Item href="#action/3.1">Basic</NavDropdown.Item></Link>
                <Link to="/stages/stage 1"><NavDropdown.Item href="#action/3.2">Stage 1</NavDropdown.Item></Link>
                <Link to="/stages/stage 2"><NavDropdown.Item href="#action/3.3">Stage 2</NavDropdown.Item></Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default Navegacion;