import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Avatar from '@mui/material/Avatar';

export default function MainLayout() {
    const navigate = useNavigate();
    const [showLogout, setShowLogout] = useState(false);
    const userName = localStorage.getItem('userName');

    const handleRegisterClick = () => {
        navigate('/reg');
    };

    const handleLoginClick = () => {
        navigate('/log');
    };

    const handleAvatarClick = () => {
        setShowLogout(!showLogout); // Toggle the logout button visibility
    };

    const handleLogoutClick = () => {
        localStorage.removeItem('userName'); // Remove userName from local storage
        navigate('/'); // Redirect to the login page or any other desired page
    };

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#003b95" }} className='p-3 fixed-top'>
                <Container>
                    <Navbar.Brand href="#home" className='text-white fs-5 fw-bold'>Booking.Com</Navbar.Brand>
                    <Navbar.Toggle style={{ backgroundColor: "white", margin: "5px" }} aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            {userName ? (
                                <>
                                    <Avatar
                                        sx={{ bgcolor: '#fff', color: '#003b95', cursor: 'pointer' }}
                                        onClick={handleAvatarClick}
                                    >
                                        {userName.charAt(0).toUpperCase()}
                                    </Avatar>
                                    {showLogout && (
                                        <Button className='m-1' variant="light" onClick={handleLogoutClick}>Logout</Button>
                                    )}
                                </>
                            ) : (
                                <>
                                    <Button className='m-1' variant="light" onClick={handleRegisterClick}>Register</Button>
                                    <Button className='m-1' variant="light" onClick={handleLoginClick}>Login</Button>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
