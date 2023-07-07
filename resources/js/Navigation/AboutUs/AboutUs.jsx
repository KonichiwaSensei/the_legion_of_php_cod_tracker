import '../../../css/AboutUs.scss'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom';
import AboutUsComponant from './AboutUsComponant/AboutUsComponant';


export default function AboutUs(){

    return (
        <>
        <section className="aboutus">
        <AboutUsComponant imgUrl={"/img/face-gd6608c01f_640.jpg"} para={'some information about each of us'} Linkedin={"https://www.linkedin.com/"} github={"https://www.github.com/"}/>
        <AboutUsComponant imgUrl={"/img/face-gd6608c01f_640.jpg"} para={'some information about each of us'}Linkedin={"https://www.linkedin.com/"}github={"https://www.github.com/"}/>
        <AboutUsComponant imgUrl={"/img/face-gd6608c01f_640.jpg"} para={'some information about each of us'}Linkedin={"https://www.linkedin.com/"}github={"https://www.github.com/"}/>
        </section>

        </>
    )
}


