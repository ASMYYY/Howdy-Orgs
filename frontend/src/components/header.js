import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import headerBanner from './images/header.png';

const Header = () => {
  return (
    <>
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
        backgroundColor: '#f5f5f5',
        borderBottom: '1px solid #ddd'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Logo" style={{ height: '50px', marginRight: '15px' }} />
          <h1 style={{ fontSize: '24px', color: '#333' }}>Howdy Orgs</h1>
        </div>
        <nav>
          <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0, padding: 0 }}>
            <li><Link to="/" style={{ textDecoration: 'none', color: '#333' }}>Home</Link></li>
            <li><Link to="/allorgs" style={{ textDecoration: 'none', color: '#333' }}>All Orgs</Link></li>
            <li><Link to="/profile" style={{ textDecoration: 'none', color: '#333' }}>Profile</Link></li>
            <li><Link to="/about" style={{ textDecoration: 'none', color: '#333' }}>About Us</Link></li>
          </ul>
        </nav>
      </header>
      <div>
        <img src={headerBanner} alt="Header Banner" style={{ width: '100%', height: 'auto' }} />
      </div>
    </>
  );
};

export default Header;
