import { useState } from "react";
import "../../../css/Header.scss";
import ModalRegistration from "../../Modal/Modal";
import { Link } from "react-router-dom";
export default function Header() {


    const [burger, setburger] = useState(false);
    const handleClick = () => {
        console.log(burger);
        setburger(true)

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
                    <img className="Logo" src="/img/bullets-g501bdc5d1_640.jpg" alt="" />
                    <h2>COD: M W 2 CAMO TRACKER</h2>
                </div>

                {/* show above 768px, not below - CSS */}
                <nav className="navigation">
                    <Link className="Home" to="/">Home</Link>
                    <Link className="Register" onClick={() => displayModal('registration')}>Register</Link>
                    <Link className="Camos" to="/tracker">Camos</Link>
                </nav>

                {/* show below 768px, not above - CSS */}
                <div className="burger-icon" onClick={handleClick}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                {/* don't show at all, only show/hide by clicking the burger icon CSS + React */}
                {
                    burger   // state instead of fixed value
                        ?
                        <div className="burger-menu">
                            <Link className="Home" to="/">Home</Link>
                            <br />
                            <Link className="Register" onClick={() => displayModal('registration')}>Register</Link>
                            <br />
                            <Link className="Camos" to="/tracker">Camos</Link>
                            <br />
                        </div>
                        :
                        <></>
                }
            </header>
        </div>

    );
}
