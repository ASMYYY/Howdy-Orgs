import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './images/logo.jpeg';


const Header = () => {
  const location = useLocation();

  return (
    <>
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
        backgroundColor: '#500000',
        borderBottom: '1px solid #ddd'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Logo" style={{ height: '60px', marginRight: '15px' }} />
        </div>
        <nav>
          <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0, padding: 0 }}>
            <li><Link to="/" style={{
              textDecoration: 'none',
              color: '#ffffff',
              fontSize: '18px',
              borderBottom: location.pathname === '/' ? '2px solid #ffffff' : 'none'
            }}>Home</Link></li>
            <li><Link to="/allorgs" style={{
              textDecoration: 'none',
              color: '#ffffff',
              fontSize: '18px',
              borderBottom: location.pathname === '/allorgs' ? '2px solid #ffffff' : 'none'
            }}>All Orgs</Link></li>
            <li><Link to="/profile" style={{
              textDecoration: 'none',
              color: '#ffffff',
              fontSize: '18px',
              borderBottom: location.pathname === '/profile' ? '2px solid #ffffff' : 'none'
            }}>Profile</Link></li>
            <li><Link to="/about" style={{
              textDecoration: 'none',
              color: '#ffffff',
              fontSize: '18px',
              borderBottom: location.pathname === '/about' ? '2px solid #ffffff' : 'none'
            }}>About Us</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
