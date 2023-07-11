import '../../../css/AboutUs.scss'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom';
import AboutUsComponant from './AboutUsComponant/AboutUsComponant';


export default function AboutUs(){

    return (
        <>
        <section className="aboutus">
        <AboutUsComponant imgUrl={"/img/face-gd6608c01f_640.jpg"} name={'Matthew Shenar'} linkedin={"https://www.linkedin.com/"} linkgithub={"https://www.github.com/"} />
        <AboutUsComponant imgUrl={"/img/face-gd6608c01f_640.jpg"} name={'Goncalo Rodrigues'} linkedin={"https://www.linkedin.com/"} linkgithub={"https://www.github.com/"}/>
        <AboutUsComponant imgUrl={"/img/face-gd6608c01f_640.jpg"} name={'Aviv Cogoluegnes'} linkedin={"https://www.linkedin.com/"} linkgithub={"https://www.github.com/"}/>
        </section>

        </>
    )
}


