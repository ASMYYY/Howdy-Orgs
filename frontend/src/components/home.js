import React from 'react';

const recommendedOrgs = [
  { name: 'Aggie Coding Club', description: 'For developers and coders at TAMU' },
  { name: 'Women in Engineering', description: 'Support network for women in STEM' },
  { name: 'Startup TAMU', description: 'Entrepreneurial community for Aggies' },
];

const Home = () => {
  return (
    <div className="main-content">
      <main style={{ padding: '20px' }}>
        <h2>Recommended Organizations</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {recommendedOrgs.map((org, index) => (
            <div key={index} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', width: '250px' }}>
              <h3>{org.name}</h3>
              <p>{org.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;