import React, { useEffect, useState } from 'react';
import { getSBERTOrgs } from './api/getSBERTOrgs';

const AllOrgs = () => {
  const [orgs, setOrgs] = useState([]);
  const userId = 1; 

  useEffect(() => {
    const fetchRankedOrgs = async () => {
      try {
        const rankedOrgs = await getSBERTOrgs(userId);

        if (!Array.isArray(rankedOrgs)) {
          console.error("Unexpected response from backend:", rankedOrgs);
          setOrgs([]);
          return;
        }

        setOrgs(rankedOrgs);
      } catch (error) {
        console.error("Error fetching SBERT orgs:", error);
        setOrgs([]);
      }
    };

    fetchRankedOrgs();
  }, [userId]);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Recommended Organizations</h2>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '20px'
      }}>
        {Array.isArray(orgs) && orgs.map((org, index) => (
          <div key={index} style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            width: '250px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <strong>{org.title}</strong>
            <p style={{ color: '#666' }}>Match: {org.match_percentage}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllOrgs;
