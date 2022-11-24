import React from 'react';
import './Header.css';
import { Button, Form, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';
import logoPlus from '../../images/logo6.png';
import logoTooth from '../../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'



const Header = () => {
  const { user, signOutAuth } = useAuth();


  return (
    <>
      <div className='header-contact top-most container'>
        <div className="header-left">
          <p className='d-inline me-4'>
            <FontAwesomeIcon className='header-left-icon phone' icon={faPhone} />
            Call: +07554332322
          </p>
          <p className='d-inline me-4'>
            <FontAwesomeIcon className='header-left-icon email' icon={faEnvelope} /> 
            hello@disin.com
          </p>
          <p className='d-inline'>
            <FontAwesomeIcon className='header-left-icon location' icon={faLocationDot}></FontAwesomeIcon>
            210-27 Dhanmondi, Dhaka.
          </p>
        </div>
        <div className="header-right">
          <i className="fa-brands fa-square-facebook social"></i>
          <i className="fa-brands fa-square-twitter social"></i>
          <i className="fa-brands fa-linkedin social"></i>
          <i className="fa-brands fa-square-instagram social"></i>
        </div>
        
      </div>
      <Navbar bg="light" expand="lg" sticky="top" >
        <Container fluid className='container'>
          <Navbar.Brand href="#">
            <div className='header-top-logo-section'>
              <img className='logo1' src={logoTooth} alt="" />
              <h1>Safe</h1>
              <img className='logo2' src={logoPlus} alt="" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
              <Nav.Link as={NavLink} to='/contact'>Contact</Nav.Link>
              <Nav.Link as={NavLink} to='service-detail/:anyID'>Details</Nav.Link>
              <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
              <Nav.Link as={NavLink} to="/register">Reg</Nav.Link>
              <Nav.Link as={NavLink} to="/appointment">Appointment</Nav.Link>
              {/* <Nav.Link as={NavLink} to='/cart'>Cart</Nav.Link> */}
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/home/#myVideo
                ">Video</NavDropdown.Item>
                <NavDropdown.Item href="/contact#medicalMapLocation">
                  Map Location
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Some more important links
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <h5 className='nav-top-user-name'>{user.displayName} </h5>
            {/* {console.log(user)} */}
            {user?.email && <img src={user.photoURL} className='img-fluid header-user-image' alt="" />}
            {user?.email && <button onClick={signOutAuth} className="btn btn-danger nav-logout-button">LOGOUT</button>}

            <Form className="d-flex nav-top-input">
              <Form.Control
                type="search"
                placeholder="Search..."
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary nav-search-button">Search</Button>
            </Form>


          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;