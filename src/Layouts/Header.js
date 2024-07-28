import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
    </Navbar>
  );
};

export default Header;
