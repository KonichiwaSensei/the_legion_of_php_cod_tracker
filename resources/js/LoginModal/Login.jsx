import React, { useEffect, useState } from 'react';
import '../../css/Modal.scss';
import axios from 'axios';

const ModalLogin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleLogin = async() => {
    
    console.log('Login...');
    console.log('Username:', username);
    console.log('Password:', password);

    const response = await axios.post('/login',{
      email: username,
      password
    })
    console.log(response)

  };

  useEffect(() => {
    // set styling
  }, [])

  return (
    <div>
      <span className='login-div-opens-modal' onClick={handleOpenModal}>
         CLICK HERE TO LOGIN
      </span>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Login</h2>
            <form>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input className="modal_input_field"
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
          
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input className="modal_input_field"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button onClick={handleLogin} className="login-button">
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalLogin;
