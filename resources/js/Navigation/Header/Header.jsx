// import { useContext, useState } from "react";
// import "../../../css/Header.scss";
// import ModalRegistration from "../../RegistrationModal/Registration";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import Context from "../../Context";
// export default function Header() {
    
//     const { context: { user }, dispatch } = useContext(Context);

//     const [burger, setburger] = useState(false);


//     const handleClick = () => {
//         if (burger) {
//             setburger(false)
//         } else {
//             setburger(true)
//         }

//     }

//     const [displayedModal, setDisplayedModal] = useState(null);

//     const displayModal = name => {
//         setDisplayedModal(name);
//     }

//     const closeModal = () => {
//         setDisplayedModal(null);
//     }

//     // decide what to display based on the value of displayedModal
//     let modal = '';
//     if (displayedModal) {
//         switch (displayedModal) {
//             case 'registration':
//                 modal = <ModalRegistration closeModal={closeModal} />
//                 break;
//         }
//     }

//     return (
//         <div id="header-render">
//             {modal}
//             {console.log(user)}
//             <header className="Header">
//                 <div className="Header_title">
//                     <img className="Logo" src="/img/logo.png" alt="" />
//                     <Link to=''>COD: MW2 - CAMO TRACKER</Link>
//                 </div>

//                 {/* show above 768px, not below - CSS */}
//                 <div className="navigation">
//                     <nav className="navigation_links">
//                         <Link className="Home" to="/">Home</Link>
//                         <Link className="Register" onClick={() => displayModal('registration')}>Register</Link>
//                         <Link className="Camos" to="/tracker">Camos</Link>
//                         <Link className="LOGOUT" onClick={async() => {
//                         const response = await axios.post('/logout')
//                         console.log(response); }}>Logout</Link>

            
//                     </nav>
//                 </div>

//                 {/* show below 768px, not above - CSS */}
//                 <div className="burger-menu" id="burger-menu">
//                     <div className="burger-icon" onClick={handleClick}>
//                         <div></div>
//                         <div></div>
//                         <div></div>
//                     </div>
//                 </div>
//                 {/* don't show at all, only show/hide by clicking the burger icon CSS + React */}
//                 {
//                     burger   // state instead of fixed value
//                         ?
//                         <div className="burger-menu" id="burger-menu">
//                             <div className="burger-menu_links" onClick={handleClick}>
//                                 <Link className="Home" to="/">Home</Link>
//                                 <br />
//                                 <Link className="Register" onClick={() => displayModal('registration')}>Register</Link>
//                                 <br />
//                                 <Link className="Camos" to="/tracker">Camos</Link>
//                                 <br />
//                                 <Link className="LOGOUT" onClick={async() => {
//                                 const response = await axios.post('/logout')
//                                 console.log(response); }}>Logout</Link>
//                                 <br />
//                             </div>
//                         </div>
//                         :
//                         null
//                 }
//             </header>
//         </div>

//     );
// }

import { useContext, useState } from "react";
import "../../../css/Header.scss";
import ModalRegistration from "../../RegistrationModal/Registration";
import { Link } from "react-router-dom";
import axios from "axios";
import Context from "../../Context";

export default function Header() {
    const { context: { user }, dispatch } = useContext(Context);
    const [burger, setburger] = useState(false);
    const [displayedModal, setDisplayedModal] = useState(null);

    const handleClick = () => {
        setburger(!burger);
    }

    const displayModal = name => {
        setDisplayedModal(name);
    }

    const closeModal = () => {
        setDisplayedModal(null);
    }

    // decide what to display based on the value of displayedModal
    let modal = '';
    if (displayedModal) {
        switch (displayedModal) {
            case 'registration':
                modal = <ModalRegistration closeModal={closeModal} />;
                break;
        }
    }

    return (
        <div id="header-render">
            {modal}
            {console.log(user)}
            <header className="Header">
                <div className="Header_title">
                    <img className="Logo" src="/img/logo.png" alt="" />
                    <Link to=''>COD: MW2 - CAMO TRACKER</Link>
                </div>

                {/* show above 768px, not below - CSS */}
                <div className="navigation">
                    <nav className="navigation_links">
                        <Link className="Home" to="/">Home</Link>
                        {!user && <Link className="Register" onClick={() => displayModal('registration')}>Register</Link>}
                        {user && <Link className="Camos" to="/tracker">Camos</Link>}
                        {user && (
                            <Link
                                className="Logout"
                                onClick={async () => {
                                    const response = await axios.post('/logout');
                                    console.log(response);

                                    dispatch({
                                        type: 'user/set',
                                        payload: false
                                    })
                                }}
                            >
                                Logout
                            </Link>
                        )}
                    </nav>
                </div>

                {/* show below 768px, not above - CSS */}
                <div className="burger-menu" id="burger-menu">
                    <div className="burger-icon" onClick={handleClick}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                {/* don't show at all, only show/hide by clicking the burger icon CSS + React */}
                {burger && (
                    <div className="burger-menu" id="burger-menu">
                        <div className="burger-menu_links" onClick={handleClick}>
                            <Link className="Home" to="/">Home</Link>
                            {!user && <Link className="Register" onClick={() => displayModal('registration')}>Register</Link>}
                            {!user && <Link className="Login" to="/login">Login</Link>}
                            {user && <Link className="Camos" to="/tracker">Camos</Link>}
                            {user && (
                                <Link
                                    className="Logout"
                                    onClick={async () => {
                                        const response = await axios.post('/logout');
                                        console.log(response);

                                        dispatch({
                                            type: 'user/set',
                                            payload: false
                                        })
                                        
                                    }}
                                >
                                    Logout
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
}


