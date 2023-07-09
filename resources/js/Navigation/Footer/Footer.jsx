import { Link } from 'react-router-dom'
import '../../../css/Footer.scss'



export default function Footer(){


   return (
    <footer className="Footer">

    <div className="Left">@ THE LEGION OF PHP</div>

    <Link className="Right" to="about-us">About Us</Link>

    </footer>
)
}