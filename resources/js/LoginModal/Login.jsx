import React, { useContext, useEffect, useState } from 'react';
import '../../css/Modal.scss';
import axios from 'axios';
import Context from '../Context';

const ModalLogin = ({ closeModal }) => {
  const { dispatch } = useContext(Context);
  // const [isOpen, setIsOpen] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isClosing, setIsClosing] = useState('')

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

      // **BELOW IS THE CHECK IF LOGGED IN USER ALREADY EXISTS WITH HIS TOKEN THAT DOESN'T MATCH localStorage TOKEN
      // **IF SO OVERWRITE NEWLY GENERATED TOKEN IN localStorage WITH TOKEN SAVED IN DB
      // axios call to check for logged in user and try finding a profile for them... don't know if necessary
      // const userIdResponse = await axios.get('/api/user-id', { withCredentials: true }); // 401 error... idk anymore
      // const userId = userIdResponse.data;

      // axios call to get profile tokens with profiles
      const profileTokens = await axios.get(`/api/profiletokens`)

      // getting profile token id from localStorage
      let localProfileToken = localStorage.getItem("profile_token") ? JSON.parse(localStorage.getItem("profile_token")).token : null
      let localProfileTokenId = localStorage.getItem("profile_token") ? JSON.parse(localStorage.getItem("profile_token")).id : null

      // need to figure out how to get the user_id from the request?
      profileTokens.data.forEach(profileToken => {
        
        if (localProfileTokenId ? remoteProfileTokenId === localProfileTokenId : null) {
          let remoteProfileTokenId = profileToken.id
          let remoteProfileToken = profileToken.token
          let remoteUserId = profileToken.profile.user_id  
          // console.log("user_id: " + remoteUserId + " + token_id: " + remoteProfileTokenId + " + token: " + remoteProfileToken + " <- remote | local-> " + localProfileTokenId + " " + localProfileToken );
        } else {
          // localStorage.getItem("profile_token").token = remoteProfileToken
          // dunno if this works but don't have condition for getting user id from Fortify/Sanctum due to 401 error as seen above
        }
      });

      dispatch({
        type: 'user/set',
        payload: false,
      });

      closeModal()
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
