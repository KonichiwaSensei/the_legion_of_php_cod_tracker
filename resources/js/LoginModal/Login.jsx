import React, { useContext, useEffect, useState } from 'react';
import '../../css/Modal.scss';
import axios from 'axios';
import Context from '../Context';

const ModalLogin = () => {
  const { dispatch } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Login...');
    console.log('Username:', username);
    console.log('Password:', password);

    try {
      const response = await axios.post('/login', {
        email: username,
        password,
      });

      console.log(response.data); // Handle the response data according to your needs

      // another axios call to check for logged in user and try finding a profile for them
      // if if profile exists overwrite local storage token with token saved in DB

      dispatch({
        type: 'user/set',
        payload: false,
      });

      setIsOpen(false);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.log('Login failed with status:', error.response.status);
        console.log('Error message:', error.response.data.error);
        setError('Invalid username or password'); // Set an error message to display to the user
      } else if (error.request) {
        // The request was made but no response was received
        console.log('No response received from the server');
        setError('No response received from the server'); // Set an error message to display to the user
      } else {
        // Something else happened while setting up the request
        console.log('Error occurred:', error.message);
        setError('An error occurred during login'); // Set a generic error message to display to the user
      }
    }
  };

  useEffect(() => {
    // set styling
  }, []);

  return (
    <div>
      <span className="login-div-opens-modal" onClick={handleOpenModal}>
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
                <input
                  className="modal_input_field"
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  className="modal_input_field"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button onClick={handleLogin} className="login-button">
                Login
              </button>
              {error && <p className="error-message">{error}</p>}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalLogin;
