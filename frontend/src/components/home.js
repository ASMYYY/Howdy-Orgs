import React, { useEffect, useState } from 'react';
import headerBanner from './images/header.png';

const Home = () => {
  const [recommendedOrgs, setRecommendedOrgs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/backend/bm25', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: 'Neha Sharma',
        query: 'Spiritual, Honors, Service',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const topThree = data.ranked_docs.slice(0, 3);
        const formatted = topThree.map((org) => ({
          name: org.name,
          logo: org.logo,
        }));
        setRecommendedOrgs(formatted);
      })
      .catch((err) => {
        console.error('Failed to fetch orgs:', err);
      });
  }, []);

  return (
    <div className="main-content">
      <main style={{ padding: '5px' }}>
        <img
          src={headerBanner}
          alt="Header Banner"
          style={{ width: '100%', height: '380px', margin: '5px 0' }}
        />
        <h2>Recommended Organizations</h2>
        <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '20px', 
                  justifyContent: 'center' 
                }}>
                  {recommendedOrgs.map((org, index) => (
                    <div
                      key={index}
                      style={{
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        padding: '16px',
                        width: '250px',
                        textAlign: 'center',
                      }}
                    >
                      <img
                        src={`/org_images/${org.logo}`}
                        alt={`${org.name} logo`}
                        style={{
                          width: '100%',
                          height: '150px',
                          objectFit: 'contain',
                          marginBottom: '10px',
                        }}
                      />
                      <h3>{org.name}</h3>
                    </div>
                  ))}
                </div>

      </main>
    </div>
  );
};

export default Home;
