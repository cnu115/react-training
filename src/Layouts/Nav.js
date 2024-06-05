import React from "react";
import { Navbar, Container, Nav as Nav2, NavDropdown } from 'react-bootstrap';
import { useAuth } from "../Auth/authContext";

const Nav = () => {
    const { user } = useAuth()
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React Training</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav2 className="me-auto">
                        <Nav2.Link href="/">Home</Nav2.Link>
                    </Nav2>
                    {user !== null ? <Nav2><Nav2.Link href="/logout">Logout</Nav2.Link></Nav2> :
                        (<Nav2>
                            <Nav2.Link href="/login">Login</Nav2.Link>
                            <Nav2.Link eventKey={2} href="/registration">
                                Registration
                            </Nav2.Link>
                        </Nav2>)
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Nav;