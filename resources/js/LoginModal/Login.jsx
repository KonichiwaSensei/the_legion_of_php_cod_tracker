import React, { useContext, useEffect, useState } from 'react';
import '../../css/Modal.scss';
import axios from 'axios';
import Context from '../Context';
import { ProfileContext } from "../ProfileContext";

const ModalLogin = ({ closeModal }) => {
  const { dispatch } = useContext(Context);
  // const [isOpen, setIsOpen] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isClosing, setIsClosing] = useState('')


  const { checkProfileData, setProfileTokenId } = useContext(ProfileContext);

  // const handleOpenModal = () => {
  //   setIsOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsOpen(false);
  // };

  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log('Login...');
    // console.log('Username:', username);
    // console.log('Password:', password);

    try {
      const response = await axios.post('/login', {
        name: username,
        password,
      })
      // console.log(response)

      // getting profile token id from localStorage, checking on backend if user with a token exists
      // then replace local token with DB token
      let localProfileToken = localStorage.getItem("profile_token") ? JSON.parse(localStorage.getItem("profile_token")).token : null
      const { data: tokenresponse } = await axios.post('/api/token-set', { token: localProfileToken })
      // console.log(tokenresponse);
      localStorage.setItem("profile_token", JSON.stringify(tokenresponse))

      dispatch({
        type: 'user/set',
        payload: false,
      });

      closeModal()

      // FIX FOR RELOAD
      response && setProfileTokenId(tokenresponse)


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

  // useEffect(() => {
  //   // set styling
  // }, []);

  return (
    <div>
      {/* {true && ( */}
      <div className={`modal ${isClosing}`}>
        <div className="modal-content">
          <span className="close" onClick={() => {
            setIsClosing(' modal_closing')
            closeModal()
          }}>
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
      {/* )} */}
    </div>
  );
};

export default ModalLogin;
