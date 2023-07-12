import { useContext, useState } from "react";
import "../../../css/Header.scss";
import ModalRegistration from "../../RegistrationModal/Registration";
import { Link } from "react-router-dom";
import axios from "axios";
import Context from "../../Context";
import ModalLogin from "../../LoginModal/Login";

export default function Header() {
    const {
        context: { user },
        dispatch,
    } = useContext(Context);
    const [burgerVisible, setBurgerVisible] = useState(false);
    const [displayedModal, setDisplayedModal] = useState(null);

    const handleClick = () => {
        setBurgerVisible(false);
    };

    const displayModal = (name) => {
        setDisplayedModal(name);
    };

    const closeModal = () => {
        setTimeout(() => {
            setDisplayedModal(null);
        }, 500);
    };

    // decide what to display based on the value of displayedModal
    let modal = "";
    if (displayedModal) {
        switch (displayedModal) {
            case "registration":
                modal = <ModalRegistration closeModal={closeModal} />;
                break;
            case "login":
                modal = <ModalLogin closeModal={closeModal} />;
                break;
        }
    }

    return (
        <div id="header-render">
            {modal}
            {/* {console.log(user)} */}
            <header className="Header">
                <div className="Header_title">
                    <img className="Logo" src="/img/logo.png" alt="" />
                    <Link to="">COD: MW2 - CAMO TRACKER</Link>
                </div>

                {/* show above 768px, not below - CSS */}
                <div className="navigation">
                    <nav className="navigation_links">
                        <Link className="Home" to="/">
                            Home
                        </Link>
                        {!user && (
                            <Link
                                className="Register"
                                onClick={() => displayModal("registration")}
                            >
                                Register
                            </Link>
                        )}
                        {!user && (
                            <Link
                                className="Login"
                                onClick={() => displayModal("login")}
                            >
                                Login
                            </Link>
                        )}
                        <Link className="Camos" to="/tracker">
                            Camos
                        </Link>
                        {user && (
                            <Link
                                className="Logout"
                                onClick={async () => {
                                    const response = await axios.post(
                                        "/logout"
                                    );
                                    // console.log(response);

                                    dispatch({
                                        type: "user/set",
                                        payload: false,
                                    });
                                }}
                            >
                                Logout
                            </Link>
                        )}
                    </nav>
                </div>

                {/* show below 768px, not above - CSS */}
                <div className="burger-menu-and-links">
                    {!burgerVisible && (
                        <div className="burger-menu" id="burger-menu">
                            <div
                                className="burger-icon"
                                onClick={() => setBurgerVisible(true)}
                            >
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    )}
                    {/* don't show at all, only show/hide by clicking the burger icon CSS + React */}
                    {burgerVisible && (
                        <div className="burger-menu" id="burger-menu">
                            <div
                                className="burger-menu_links"
                                onClick={handleClick}
                            >
                                <Link className="Home" to="/">
                                    Home
                                </Link>
                                {!user && (
                                    <Link
                                        className="Register"
                                        onClick={() =>
                                            displayModal("registration")
                                        }
                                    >
                                        Register
                                    </Link>
                                )}
                                {!user && (
                                    <Link
                                        className="Login"
                                        onClick={() => displayModal("login")}
                                    >
                                        Login
                                    </Link>
                                )}

                                <Link className="Camos" to="/tracker">
                                    Camos
                                </Link>

                                {user && (
                                    <Link
                                        className="Logout"
                                        onClick={async () => {
                                            const response = await axios.post(
                                                "/logout"
                                            );
                                            // console.log(response);

                                            dispatch({
                                                type: "user/set",
                                                payload: false,
                                            });
                                        }}
                                    >
                                        Logout
                                    </Link>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
}

// // **OLD WAY OF DOING THINGS, BURGER DOESN'T HIDE**
// import { useContext, useState } from "react";
// import "../../../css/Header.scss";
// import ModalRegistration from "../../RegistrationModal/Registration";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import Context from "../../Context";
// import ModalLogin from "../../LoginModal/Login";

// export default function Header() {
//     const { context: { user }, dispatch } = useContext(Context);

//     // const [burger, setburger] = useState(false);
//     const [burgerVisible, setBurgerVisible] = useState(false);

//     const [displayedModal, setDisplayedModal] = useState(null);

//     const handleClick = () => {
//         // setburger(!burger);
//         setBurgerVisible(false);
//     }

//     const displayModal = name => {
//         setDisplayedModal(name);
//     }

//     const closeModal = () => {
//         setTimeout(() => {
//             setDisplayedModal(null);
//         }, 500);
//     }

//     // decide what to display based on the value of displayedModal
//     let modal = '';
//     if (displayedModal) {
//         switch (displayedModal) {
//             case 'registration':
//                 modal = <ModalRegistration closeModal={closeModal} />;
//                 break;
//             case 'login':
//                 modal = <ModalLogin closeModal={closeModal} />;
//                 break;
//         }
//     }

//     return (
//         <div id="header-render">
//             {modal}
//             {/* {console.log(user)} */}
//             <header className="Header">
//                 <div className="Header_title">
//                     <img className="Logo" src="/img/logo.png" alt="" />
//                     <Link to=''>COD: MW2 - CAMO TRACKER</Link>
//                 </div>

//                 {/* show above 768px, not below - CSS */}
//                 <div className="navigation">
//                     <nav className="navigation_links">
//                         <Link className="Home" to="/">Home</Link>
//                         {!user && <Link className="Register" onClick={() => displayModal('registration')}>Register</Link>}
//                         {!user && <Link className="Login" onClick={() => displayModal('login')}>Login</Link>}
//                         <Link className="Camos" to="/tracker">Camos</Link>
//                         {user && (
//                             <Link
//                                 className="Logout"
//                                 onClick={async () => {
//                                     const response = await axios.post('/logout');
//                                     console.log(response);

//                                     dispatch({
//                                         type: 'user/set',
//                                         payload: false
//                                     })
//                                 }}
//                             >
//                                 Logout
//                             </Link>
//                         )}
//                     </nav>
//                 </div>

//                 {/* show below 768px, not above - CSS */}
//                <div className="burger-menu-and-links">
//                 <div className="burger-menu" id="burger-menu">
//                     <div className="burger-icon" onClick={() => setBurgerVisible(true)}>
//                         <div></div>
//                         <div></div>
//                         <div></div>
//                     </div>
//                 </div>
//                 {/* don't show at all, only show/hide by clicking the burger icon CSS + React */}
//                 {burgerVisible && (
//                     <div className="burger-menu" id="burger-menu">
//                         <div className="burger-menu_links" onClick={handleClick}>
//                             <Link className="Home" to="/">Home</Link>
//                             {!user && <Link className="Register" onClick={() => displayModal('registration')}>Register</Link>}
//                             {!user && <Link className="Login" onClick={() => displayModal('login')}>Login</Link>}
//                             {!user && <Link className="Camos" to="/tracker">Camos</Link>}
//                             {user && (
//                                 <Link
//                                     className="Logout"
//                                     onClick={async () => {
//                                         const response = await axios.post('/logout');
//                                         console.log(response);

//                                         dispatch({
//                                             type: 'user/set',
//                                             payload: false
//                                         })
//                                     }}
//                                 >
//                                     Logout
//                                 </Link>
//                             )}
//                         </div>
//                     </div>
//                 )}
//                 </div>
//             </header>
//         </div>
//     );
// }
