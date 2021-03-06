import React from 'react';
import './Header.css'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {

    const [user] = useAuthState(auth);

    const handelLogOut = () => {
        signOut(auth)
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/home"><h1 className='header-title'>Fruity Garden</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto  my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/blogs">Blogs</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>

                    <Nav className='ms-5 me-5 header-link'>
                        {
                            user ?
                                <div>
                                    <button onClick={handelLogOut} className='mx-2 rounded bg-black text-white'>Log out</button>
                                    <Link to={'/inventories'}>Manage All</Link>
                                    <Link to={'/additem'}>Add Item</Link>
                                    <Link to={'/myitem'}>My Item</Link>
                                </div>
                                :
                                <div>

                                    <Link className='mx-2' to={'/login'}>Login</Link> <Link className='mt-0' to={'/signup'}>Signup</Link>
                                </div>

                        }



                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;