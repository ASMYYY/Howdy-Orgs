import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { useNavigate } from 'react-router-dom';

const LoginRegister = () => {
  const [formType, setFormType] = useState('login');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('loggedIn') === 'true') {
      navigate('/home');
    }
  }, [navigate]);

  useEffect(() => {
    fetch('/backend/data/Users_Master.csv')
      .then(res => res.text())
      .then(csv => {
        Papa.parse(csv, {
          header: true,
          skipEmptyLines: true,
          complete: results => setUsers(results.data)
        });
      });
  }, []);

  const handleLogin = () => {
    const user = users.find(user =>
      user?.Email?.trim().toLowerCase() === email.trim().toLowerCase() &&
      user?.PWD === pwd
    );

    if (user) {
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('userName', user.Name);
      navigate('/home');
    } else {
      setMessage('Invalid credentials');
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fdf6ee', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}>
      <div style={{
        padding: '2rem',
        width: '100%',
        maxWidth: '480px',
        borderRadius: '12px',
        boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
        backgroundColor: 'white',
        border: '1px solid #e0dcdc'
      }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#500000', marginBottom: '2rem', textAlign: 'left' }}>LOG IN</h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <hr />

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <label style={{ minWidth: '70px', fontSize: '0.875rem', color: '#7c6f5f' }}>Email</label>
            <input
              type="email"
              style={{
                padding: '0.75rem',
                borderRadius: '6px',
                border: '1px solid #ccc',
                backgroundColor: '#eef2fa',
                width: '100%'
              }}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <label style={{ minWidth: '70px', fontSize: '0.875rem', color: '#7c6f5f' }}>Password</label>
            <input
              type="password"
              style={{
                padding: '0.75rem',
                borderRadius: '6px',
                border: '1px solid #ccc',
                backgroundColor: '#eef2fa',
                width: '100%'
              }}
              value={pwd}
              onChange={e => setPwd(e.target.value)}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
            <button
              onClick={handleLogin}
              style={{
                backgroundColor: '#500000',
                color: 'white',
                fontWeight: '600',
                padding: '0.75rem 2rem',
                borderRadius: '999px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Next
            </button>

            <button
              onClick={handleRegisterRedirect}
              style={{
                backgroundColor: '#500000',
                color: 'white',
                fontWeight: '600',
                padding: '0.75rem 2rem',
                borderRadius: '999px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Register
            </button>
          </div>

          {message && <p style={{ color: 'red', textAlign: 'center' }}>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
