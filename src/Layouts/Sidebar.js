import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Link to={'/admin'} className='nav-link active'>Dashboard</Link>
        <Link to={'/admin/products'} className='nav-link active'>Products</Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
