import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
export default function MainLayout() {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        // Redirect to the registration page
        navigate('/reg');
    };

    const handleLoginClick = () => {
        // Redirect to the login page
        navigate('/log');
    };
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#003b95" }} className='p-3'>
            <Container>
                <Navbar.Brand href="#home" className='text-white fs-5 fw-bold'>Booking.Com</Navbar.Brand>
                <Navbar.Toggle style={{ backgroundColor: "white", margin:"5px" }} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                    <Button className='m-1' variant="light" onClick={handleRegisterClick}>Register</Button>
                    <Button className='m-1' variant="light" onClick={handleLoginClick}>Login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

