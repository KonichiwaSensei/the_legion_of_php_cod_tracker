import React, { useState } from 'react';
import '../../css/Login.scss';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
   
    console.log('Logging in...');
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className='login_div'>
      <h2 className='title'>Login</h2>
      <form >
        <div className='login'>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='password'>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div  className='login-button_div'>
        <button className='login-button' type="button" onClick={handleLogin}>
          Login
        </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
