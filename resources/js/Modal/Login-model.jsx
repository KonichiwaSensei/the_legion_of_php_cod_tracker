// import React, { useEffect, useState } from 'react';
// import '../../css/Modallogin.scss';

// const ModalLogin = ({ closeModal }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleOpenModal = () => {
//     setIsOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsOpen(false);
//   };

//   const handleLogin = () => {
    
//     console.log('Login...');
//     console.log('Username:', username);
//     console.log('Password:', password);
//   };

//   useEffect(() => {
//     // set styling
//     setIsOpen(true);

//   }, [])

//   return (
//     <div>
//       {/* <button onClick={ closeModal }>&times;</button> */}
//       {/* <button type="button" onClick={handleOpenModal} className="register-button">
//         Register
//       </button> */}
//       {isOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={closeModal}>
//               &times;
//             </span>
//             <h2>Login</h2>
//             <form>
//               <div className="form-group">
//                 <label htmlFor="username">Username:</label>
//                 <input className="modal_input_field"
//                   type="text"
//                   id="username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                 />
//               </div>
          
//               <div className="form-group">
//                 <label htmlFor="password">Password:</label>
//                 <input className="modal_input_field"
//                   type="password"
//                   id="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//               <button type="button" onClick={handleLogin} className="login-button">
//                 Login
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ModalLogin;
