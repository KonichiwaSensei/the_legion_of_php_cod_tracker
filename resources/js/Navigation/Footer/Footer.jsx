import { Link } from 'react-router-dom'
import '../../../css/Footer.scss'



export default function Footer(){


   return (
    <footer className="Footer">

    <a target="blank_" href="https://github.com/KonichiwaSensei/the_legion_of_php_cod_tracker.git"className="Left">@ THE LEGION OF PHP</a>

    <Link className="Right" to="about-us">About Us</Link>

    </footer>
)
}