import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './header.css';
import Header from './header';
import Home from './home';
import AllOrgs from './allorgs';
import Profile from './profile';
import About from './about';

function App() {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allorgs" element={<AllOrgs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<h2>Page Not Found</h2>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
