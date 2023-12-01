import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './Login.css'; // Import your CSS file
import '../../Styles/login_page.css'


const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const validCredentials = [
      { username: 'praveen', password: '12345678' },
      { username: 'john', password: '12345678' },
      { username: 'usha' , password:'12345678'}
    ];

    const isValid = validCredentials.some(
      (cred) => cred.username === username && cred.password === password
    );

    if (isValid) {
      onLogin();
      navigate('/');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    
      <div className='body'>
        <div className='wrapper'>
      <h2>Login</h2>
      <div className="input-box">
        
          <input
          placeholder='Enter Name'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
      
      </div>
      <div className="input-box">
  
          <input
          placeholder='Password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
      
      </div>
      <div>
        <button   className="btn" onClick={handleLogin}>Login</button>
      </div>
      </div>
      </div>
    
  );
};

export default Login;
