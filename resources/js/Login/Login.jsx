// import React, { useState } from 'react';
// import '../../css/Login.scss';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
   
//     console.log('Logging in...');
//     console.log('Username:', username);
//     console.log('Password:', password);
//   };

//   // return (
//   //   <div className='login_div'>
//   //     <h2 className='title'>Login</h2>
//   //     <form >
//   //       <div className='login'>
//   //         <label htmlFor="username"></label>
//   //         <input
//   //         placeholder='username'
//   //           type="text"
//   //           id="username"
//   //           value={username}
//   //           onChange={(e) => setUsername(e.target.value)}
//   //         />
//   //       </div>
//   //       <div className='password'>
//   //         <label htmlFor="password"></label>
//   //         <input
//   //         placeholder='password'
//   //           type="password"
//   //           id="password"
//   //           value={password}
//   //           onChange={(e) => setPassword(e.target.value)}
//   //         />
//   //       </div>
//   //       <div  className='login-button_div'>
//   //       <button className='login-button' type="button" onClick={handleLogin}>
//   //         GO TO YOUR CAMOS
//   //       </button>
//   //       </div>
//   //     </form>
//   //   </div>
//   // );
// };

// export default Login;



import React, { useEffect, useState } from 'react';
import '../../css/Modallogin.scss';

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

  const handleLogin = () => {
    
    console.log('Login...');
    console.log('Username:', username);
    console.log('Password:', password);
  };

  useEffect(() => {
    // set styling
  }, [])

  return (
    <div>
      <button className='login-button' type="button" onClick={handleOpenModal}>
         GO TO YOUR CAMOS
      </button>
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
              <button type="button" onClick={handleLogin} className="login-button">
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
