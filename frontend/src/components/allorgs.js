import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
 
const AllOrgs = () => {
  const [orgs, setOrgs] = useState([]);
 
  useEffect(() => {
    fetch('http://127.0.0.1:8000/backend/orgs-list')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch organization data');
        }
        return response.json();
      })
      .then(data => setOrgs(data))
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
 
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ marginBottom: '20px' }}>
        <h2>All TAMU Organizations</h2>
      </div>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        maxWidth: '1000px'
      }}>
        {orgs.map((org, index) => (
          <Link to="/orgdetails" key={index} style={{
            width: '250px',
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <div style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '16px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              textAlign: 'center',
              backgroundColor: '#fff',
              transition: 'transform 0.2s',
            }}>
              <strong>{org.title || 'Unnamed Organization'}</strong>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
 
export default AllOrgs;
 
