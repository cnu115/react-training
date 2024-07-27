import React, { useContext } from "react";
import { Navbar, Container, Nav as Nav2, Badge } from 'react-bootstrap';
import { useAuth } from "../Auth/authContext";
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { CartContext } from "../ContextApi/CartContext";
import { useSelector } from "react-redux";

const Nav = () => {
    const { user, logout } = useAuth();
    const { getCartItemsCount } = useContext(CartContext);
    const cartCount = getCartItemsCount();
    const {value} = useSelector((state) => state.counter);
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React Training</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav2 className="me-auto">
                        <Link className="nav-link" to={"/"}>Home</Link>
                        <Link className="nav-link" to={"/counter"}>Counter {value}</Link>
                    </Nav2>
                    {user !== null ? <>
                        <Nav2>
                            <Link className="nav-link" to={"/cart"}>
                                <FaShoppingCart style={{ marginRight: '5px' }} />
                                Cart {cartCount > 0 && <Badge bg="danger">{cartCount}</Badge>}
                            </Link>
                        </Nav2>
                        <Nav2>
                            <button className="nav-link" onClick={logout} >Logout</button>
                        </Nav2>
                    </> :
                        (<Nav2>
                            <Link className="nav-link" to={"/login"}>Login</Link>
                            <Link className="nav-link" eventKey={2} to={"/registration"}>
                                Registration
                            </Link>
                        </Nav2>)
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Nav;