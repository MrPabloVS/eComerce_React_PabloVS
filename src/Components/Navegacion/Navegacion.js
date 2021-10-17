
import CartWidget from "../CartWidget/CartWidget";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react'
import axios from "axios";


function Navegacion() {

  const [Categorias, setCategorias] = useState([])

    const getCategorias = async () => {

        try {
            const respuesta = await axios.get( `https://fakestoreapi.com/products/categories`)
            console.log(respuesta.data)
            setCategorias(respuesta.data)
            console.log(Categorias)
        } catch (error) {
            console.log(error)
            
        }
    }

  useEffect(() => {
    getCategorias()
}, []) 

    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><CartWidget/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link to="/"><Nav.Link href="#home">Home</Nav.Link></Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                {Categorias && Categorias.map(c => <Link to={`/categories/${c}`}><NavDropdown.Item href={`/categories/${c}`}>{c}</NavDropdown.Item></Link>)}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default Navegacion;