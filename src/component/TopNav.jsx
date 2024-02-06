import React from 'react'
import { Container, Navbar, NavLink , Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
//import { FontAwesomeIcon } from 'font-awesome';


const TopNav = () => {
    return (
        <div>
            <Navbar className='navbar shadow-sm' expand="lg" >
                <Container >
                    <Navbar.Brand href="/" className='fw-bold fs-4 '>SURYA JEWELLERS</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className=" mx-auto">
                    <NavLink href="/" className='nav-link fw-bold active '>Home</NavLink>
                            <NavLink href="/products" className='nav-link fw-bold '>Store</NavLink>
                           
                            <NavLink href="/aboutus" className='nav-link fw-bold '>About us</NavLink>

                        </Nav>

                        
                        <Button href="https://wa.me/7678339856" target="_blank" className='btn-outline-dark  m-2 py-2 fa fa-whatsapp' type='primary'  ></Button> 
                        <Button href="tel:767-833-9856" target="_blank" className='btn-outline-dark  m-2 py-2 fa fa-phone'></Button> 
                        <Button href="https://www.instagram.com/surya__jeweller" target="_blank" className='btn-outline-dark  m-2 py-2 fa fa-instagram'></Button> 
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};
export default TopNav;
