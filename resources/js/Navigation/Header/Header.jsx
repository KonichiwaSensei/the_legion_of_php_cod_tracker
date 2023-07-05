import { useState } from "react";
import "../../../css/Header.scss";



export default function Header() 
{
    const [burger, setburger] = useState(false);
    const handleClick = () => {
        console.log(burger);
        setburger(true)
        
    }
   
     
    return (

        
    
        
        <header className="Header">
            <div className="Header_title">
                <img className="Logo" src="/img/bullets-g501bdc5d1_640.jpg" alt="" />
                <h2>COD: M W 2 CAMO TRACKER</h2>
            </div>
            
            {/* show above 768px, not below - CSS */}
            <nav className="navigation">
                <a className="Home" href="/">Home</a>
                <a className="Register" href="#">Register</a>
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
        
    );
}
