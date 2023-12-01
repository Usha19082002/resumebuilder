import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DetailsFillingPage from './Components/DetailsFillComponents/DetailsFillingPage';
import Home from './Components/HomePage/Home';
import NavBar from './Components/Navigation/Navbar';
import MyResume from './Components/ResumeDisplay/MyResume';
import AboutUs from './Components/AboutUs/AboutUs';
import Login from './Components/Login/login';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      <div>
        <NavBar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      </div>

      <div>
      <Routes>
  <Route path="/login" element={<Login onLogin={handleLogin} />} />
  <Route
    path="/detailsfillingpage/*"
    element={
      isAuthenticated ? (
        <DetailsFillingPage />
      ) : (
        <div>
          <p>Please login to access this page.</p>
          <Navigate to="/login" />
        </div>
      )
    }
  />
  <Route
    path="/myresume"
    element={
      isAuthenticated ? (
        <MyResume />
      ) : (
        <div>
          <p>Please login to access this page.</p>
          <Navigate to="/login" />
        </div>
      )
    }
  />
  <Route exact path="/about" element={<AboutUs />} />
  <Route
    exact
    path="/"
    element={
      isAuthenticated ? (
        <Home />
      ) : (
        <div>
          <p>Please login to access this page.</p>
          <Navigate to="/login" />
        </div>
      )
    }
  />
  <Route path="*" element={<Navigate to="/about" />} />
</Routes>

      </div>
    </div>
  );
}

export default App;
