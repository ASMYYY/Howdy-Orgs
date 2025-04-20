import React, { useEffect, useState } from 'react';
import { getSBERTOrgs } from './api/getSBERTOrgs';

const AllOrgs = () => {
  const [orgs, setOrgs] = useState([]);
  const [displayLimit, setDisplayLimit] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const userEmail = localStorage.getItem('userEmail') || '';
  const userName = localStorage.getItem('userName') || 'you';
  const interests = JSON.parse(localStorage.getItem('interests') || '[]');
  const interestStr = interests.filter(Boolean).join(', ');

  useEffect(() => {
    const fetchRankedOrgs = async () => {
      try {
        const rankedOrgs = await getSBERTOrgs(userEmail);
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
  }, [userEmail]);

  const handleLimitChange = (e) => {
    const value = e.target.value === "all" ? "all" : parseInt(e.target.value);
    setDisplayLimit(value);
    setCurrentPage(1); // reset to first page
  };

  const totalPages = displayLimit === "all" ? 1 : Math.ceil(orgs.length / displayLimit);
  const paginatedOrgs =
    displayLimit === "all"
      ? orgs
      : orgs.slice((currentPage - 1) * displayLimit, currentPage * displayLimit);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>
        Recommended Organizations for {userName}
        {interestStr && ` based on the following interests: ${interestStr}`}
      </h2>

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="limitSelect" style={{ marginRight: '10px' }}>Show:</label>
        <select id="limitSelect" onChange={handleLimitChange} value={displayLimit}>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="all">All</option>
        </select>
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '20px'
      }}>
        {paginatedOrgs.map((org, index) => (
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

      {displayLimit !== "all" && (
        <div style={{ marginTop: '30px' }}>
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            style={{ marginRight: '10px' }}
          >
            ← Prev
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            style={{ marginLeft: '10px' }}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
};

export default AllOrgs;
