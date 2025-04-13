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

  useEffect(() => {
    const storedLogin = localStorage.getItem('loggedIn') === 'true';
    setLoggedIn(storedLogin);
  }, []);

  return (
    <Router>
      <div className="App">
        {loggedIn && <Header />}
        <Routes>
          <Route path="/" element={loggedIn ? <Home /> : <LoginRegister />} />
          <Route path="/register" element={<Register />} />
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
