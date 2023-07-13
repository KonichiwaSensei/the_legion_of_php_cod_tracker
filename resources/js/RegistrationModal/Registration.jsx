import React, { useEffect, useState, useContext } from "react";
import "../../css/Modal.scss";
import axios from "axios";
import Context from "../Context";

const ModalRegistration = ({ closeModal }) => {
    // const [isOpen, setIsOpen] = useState(false);
    const { dispatch } = useContext(Context);
    const [isClosing, setIsClosing] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [error, setError] = useState("");

    // const handleOpenModal = () => {
    //   setIsOpen(true);
    // };

    // const handleCloseModal = () => {
    //   setIsOpen(false);
    // };

    const handleRegistration = async () => {
        // console.log("Registering...");
        // console.log("Username:", username);
        // console.log("Email:", email);
        // console.log("Password:", password);
        // console.log("Password Confirmation:", passwordConfirmation);

        let profileTokenId = localStorage.getItem("profile_token") ? JSON.parse(localStorage.getItem("profile_token")).id : null
        
        try {
            const response = await axios.post("/register", {
                name: username,
                email,
                password,
                password_confirmation: passwordConfirmation,
                token_id: profileTokenId
            });

            // console.log(response);

            dispatch({
                type: "user/set",
                payload: false,
            });

            closeModal();
        } catch (error) {
            console.log(error)
            if (error.response) {
                // The request was made and the server responded with a status code
                console.log("Login failed with status:", error.response.status);
                console.log("Error message:", error.response.data.error);
                setError("Invalid username or password"); // Set an error message to display to the user
            } else if (error.request) {
                // The request was made but no response was received
                console.log("No response received from the server");
                setError("No response received from the server"); // Set an error message to display to the user
            } else {
                // Something else happened while setting up the request
                console.log("Error occurred:", error.message);
                setError("An error occurred during login"); // Set a generic error message to display to the user
            }
        }
    };

    // useEffect(() => {
    //   // set styling
    //   setIsOpen(true);

    // }, [])

    return (
        <div>
            {/* {true && ( */}
            <div className={`modal ${isClosing}`}>
                <div className="modal-content">
                    <span
                        className="close"
                        onClick={() => {
                            setIsClosing(" modal_closing");
                            closeModal();
                        }}
                    >
                        &times;
                    </span>
                    <h2>Registration</h2>
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
                            <label htmlFor="email">Email:</label>
                            <input
                                className="modal_input_field"
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                        <div className="form-group">
                            <label htmlFor="password-confirmation">
                                Password Confirmation:
                            </label>
                            <input
                                className="modal_input_field"
                                type="password"
                                id="password-confirmation"
                                value={passwordConfirmation}
                                onChange={(e) =>
                                    setPasswordConfirmation(e.target.value)
                                }
                            />
                        </div>
                        <button
                            type="button"
                            onClick={handleRegistration}
                            className="register-button"
                        >
                            Register
                        </button>
                        {error && <p className="error-message">{error}</p>}
                    </form>
                </div>
            </div>
            {/* )} */}
        </div>
    );
};
export default ModalRegistration;
