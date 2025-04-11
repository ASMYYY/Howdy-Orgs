import React, { useEffect, useState } from 'react';
import orgsData from './tamu_organizations.json';

const AllOrgs = () => {
  const [orgs, setOrgs] = useState([]);

  useEffect(() => {
    setOrgs(orgsData);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>All TAMU Organizations</h2>
      <ul>
        {orgs.map((org, index) => (
          <li key={index} style={{ marginBottom: '1rem' }}>
            <strong>{org.name || 'Unnamed Organization'}</strong><br />
            <span>{org.description || 'No description available.'}</span><br />
            {org.url && (
              <a href={org.url} target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllOrgs;
