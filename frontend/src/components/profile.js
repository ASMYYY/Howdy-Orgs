import React, { useState, useEffect } from 'react';

const interests = [
  "Academic", "Acting", "Advisory", "Advocacy", "Agriculture", "Architecture", "Arts", "Athletic",
  "Business", "Career", "Community", "Consulting", "Cultural", "Development", "Education",
  "Engineering", "Entertainment", "Environmental", "Film", "Food", "Fraternity", "Gaming",
  "Governance", "Health", "Honors", "Interest", "International", "Law", "Leadership", "Marine",
  "Maritime", "Military", "MultiCultural", "Music", "Pantry", "Performance", "Politics",
  "Professional", "Recreation", "Religious", "Research", "Residence", "Science", "Service",
  "Social", "Sorority", "Special", "Spiritual", "Sports", "Support", "Technical", "Traditions",
  "Unity", "Veterinary", "Visualisation"
];

const Profile = () => {
  const [userData, setUserData] = useState({
    Email: '',
    Name: '',
    Interest1: '',
    Interest2: '',
    Interest3: '',
    Clubs: ''
  });

  useEffect(() => {
    const email = localStorage.getItem('userEmail') || '';
    const name = localStorage.getItem('userName') || '';
    const interestsFromStorage = JSON.parse(localStorage.getItem('interests') || '[]');
    const clubs = localStorage.getItem('clubs') || '';

    setUserData({
      Email: email,
      Name: name,
      Interest1: interestsFromStorage[0] || '',
      Interest2: interestsFromStorage[1] || '',
      Interest3: interestsFromStorage[2] || '',
      Clubs: clubs
    });
  }, []);

  const handleChange = (field, value) => {
    setUserData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = async () => {
    const updatedInterests = [
      userData.Interest1.trim(),
      userData.Interest2.trim(),
      userData.Interest3.trim()
    ];

    localStorage.setItem('userName', userData.Name.trim());
    localStorage.setItem('interests', JSON.stringify(updatedInterests));

    const payload = {
      Email: userData.Email,
      Name: userData.Name.trim(),
      Interest1: updatedInterests[0],
      Interest2: updatedInterests[1],
      Interest3: updatedInterests[2]
    };

    try {
      const res = await fetch('http://localhost:8000/api/update-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await res.json();
      if (res.ok) {
        alert('Profile updated successfully!');
      } else {
        throw new Error(result.detail || 'Update failed');
      }
    } catch (err) {
      console.error('Error updating profile:', err);
      alert('Failed to update profile on server.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>My Profile</h2>

      <div style={{ marginBottom: '15px' }}>
        <label><strong>Email:</strong></label><br />
        <input
          type="text"
          value={userData.Email}
          disabled
          style={{ width: '100%', padding: '0.75rem', backgroundColor: '#eee', borderRadius: '6px', border: '1px solid #ccc' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label><strong>Name:</strong></label><br />
        <input
          type="text"
          value={userData.Name}
          onChange={(e) => handleChange('Name', e.target.value)}
          style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #ccc' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label><strong>Clubs:</strong></label>
        <p style={{ whiteSpace: 'pre-wrap' }}>{userData.Clubs}</p>
      </div>

      {['Interest1', 'Interest2', 'Interest3'].map((interestKey, idx) => (
        <div key={interestKey} style={{ marginBottom: '15px' }}>
          <label><strong>{`Interest ${idx + 1}`}</strong></label><br />
          <select
            name={interestKey}
            value={userData[interestKey]}
            onChange={(e) => handleChange(interestKey, e.target.value)}
            style={{ padding: '0.75rem', width: '100%', borderRadius: '6px', border: '1px solid #ccc', backgroundColor: '#eef2fa' }}
          >
            <option value="">Select Interest</option>
            {interests
              .filter(i => i !== userData.Interest1 && i !== userData.Interest2 && i !== userData.Interest3 || i === userData[interestKey])
              .map(i => (
                <option key={i} value={i}>{i}</option>
              ))}
          </select>
        </div>
      ))}

      <button
        onClick={handleSave}
        style={{
          padding: '10px 20px',
          backgroundColor: '#500000',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        Save Profile
      </button>
    </div>
  );
};

export default Profile;
