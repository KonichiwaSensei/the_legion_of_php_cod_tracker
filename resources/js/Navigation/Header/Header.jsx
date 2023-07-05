import { useState } from "react";
import "../../../css/Header.scss";
import ModalRegistration from "../../Modal/Modal";


export default function Header() 
{   
    
   
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
                modal = <ModalRegistration closeModal={ closeModal } />
                break;
        }
    }

    return (

        <>
    
            { modal }
        
            <header className="Header">
                <div className="Header_title">
                    <img className="Logo" src="/img/bullets-g501bdc5d1_640.jpg" alt="" />
                    <h2>COD: M W 2 CAMO TRACKER</h2>
                </div>
                
                {/* show above 768px, not below - CSS */}
                <nav className="navigation">
                    <a className="Home" href="/">Home</a>
                    <a className="Register" href="#" onClick={ () => displayModal('registration') }>Register</a>
                    <a className="Camos" href="/tracker">Camos</a>
                </nav>
                
                {/* show below 768px, not above - CSS */}
                <div className="burger-icon"  onClick={handleClick}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                {/* don't show at all, only show/hide by clicking the burger icon CSS + React */}
                {
                    burger   // state instead of fixed value
                    ?
                    <div className="burger-menu">
                        <a className="Home" href="/">Home</a><br />
                        <a className="Register" href="#">Register</a><br />
                        <a className="Camos" href="#">Camos</a><br />
                    </div> 
                    : 
                    <></>
                }   
                
                
    
            </header>

        </>
        
    );
}
