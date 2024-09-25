import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function AdminCrudLayout() {
    const navigate = useNavigate();

    const handleCreateClick = () => {
        navigate('/admin/create');
    };
    const handleReadClick = () => {
        navigate('/admin/read');
    };
    const handleUpdateClick = () => {
        navigate('/admin/update');
    };
    const handleDeleteClick = () => {
        navigate('/admin/delete');
    };
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#003b95" }} className='p-3 fixed-top'>
            <Container>
                <Navbar.Brand href="#home" className='text-white fs-5 fw-bold'>Booking.Com - Admin</Navbar.Brand>
                <Navbar.Toggle style={{ backgroundColor: "white", margin:"5px" }} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                    <Button className='m-1' variant="light" onClick={handleCreateClick}>Create</Button>
                    <Button className='m-1' variant="light" onClick={handleReadClick}>Read</Button>
                    <Button className='m-1' variant="light" onClick={handleUpdateClick}>Update</Button>
                    <Button className='m-1' variant="light" onClick={handleDeleteClick}>Delete</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

