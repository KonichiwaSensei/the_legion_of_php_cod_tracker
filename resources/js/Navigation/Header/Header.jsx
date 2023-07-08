import { useState } from "react";
import "../../../css/Header.scss";
import ModalRegistration from "../../RegistrationModal/Registration";
import { Link } from "react-router-dom";
export default function Header() {
    
    const [burger, setburger] = useState(false);

    const handleClick = () => {
        if (burger) {
            setburger(false)
        } else {
            setburger(true)
        }

    }

    const [displayedModal, setDisplayedModal] = useState(null);

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
                modal = <ModalRegistration closeModal={closeModal} />
                break;
        }
    }

    return (
        <div id="header-render">
            {modal}
            <header className="Header">
                <div className="Header_title">
                    <img className="Logo" src="/img/logo.png" alt="" />
                    <h2>COD: MW2 - CAMO TRACKER</h2>
                </div>

                {/* show above 768px, not below - CSS */}
                <div className="navigation">
                    <nav className="navigation_links">
                        <Link className="Home" to="/">Home</Link>
                        <Link className="Register" onClick={() => displayModal('registration')}>Register</Link>
                        <Link className="Camos" to="/tracker">Camos</Link>
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
                {
                    burger   // state instead of fixed value
                        ?
                        <div className="burger-menu" id="burger-menu">
                            <div className="burger-menu_links" onClick={handleClick}>
                                <Link className="Home" to="/">Home</Link>
                                <br />
                                <Link className="Register" onClick={() => displayModal('registration')}>Register</Link>
                                <br />
                                <Link className="Camos" to="/tracker">Camos</Link>
                                <br />
                            </div>
                        </div>
                        :
                        null
                }
            </header>
        </div>

    );
}
