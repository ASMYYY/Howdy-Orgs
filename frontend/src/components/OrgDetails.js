import React from 'react';
import { useLocation } from 'react-router-dom';

const OrgDetails = () => {
  const location = useLocation();
  const { org } = location.state || {};

  if (!org) {
    return <div style={{ padding: '20px' }}>No organization data provided.</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>{org.name || 'Unnamed Organization'}</h2>
      <p>{org.description || 'No description available.'}</p>
      {org.image && (
        <img
          src={require(`../images/${org.image}`)}
          alt={org.name}
          style={{ width: '300px', borderRadius: '8px', marginTop: '10px' }}
        />
      )}
      {org.url && (
        <p>
          <a href={org.url} target="_blank" rel="noopener noreferrer">
            Visit Website
          </a>
        </p>
      )}
    </div>
  );
};

export default OrgDetails;
