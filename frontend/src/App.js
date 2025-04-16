import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import AllOrgs from './components/allorgs';
import Profile from './components/profile';
import LoginRegister from './components/login';
import Register from './components/register';
import { useState, useEffect } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const storedLogin = localStorage.getItem('loggedIn') === 'true';
    const storedEmail = localStorage.getItem('userEmail') || '';
    setLoggedIn(storedLogin);
    setUserEmail(storedEmail);
  }, []);

  return (
    <Router>
      <div className="App">
        {window.location.pathname !== '/' && window.location.pathname !== '/register' && <Header />}
        <Routes>
          <Route path="/" element={loggedIn ? <Home /> : <LoginRegister setLoggedIn={setLoggedIn} setUserEmail={setUserEmail} />} />
          <Route path="/register" element={<Register setLoggedIn={setLoggedIn} setUserEmail={setUserEmail} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/allorgs" element={<AllOrgs />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
