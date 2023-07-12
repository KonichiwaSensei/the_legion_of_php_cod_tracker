import '../../../css/AboutUs.scss'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom';
import AboutUsComponant from './AboutUsComponant/AboutUsComponant';


export default function AboutUs(){

    return (
        <>
        <section className="aboutus">
        <AboutUsComponant imgUrl={"/img/matt.png"} name={'Matthew Shenar'} linkedin={"https://www.linkedin.com/in/matthew-shenar/"} linkgithub={"https://github.com/KonichiwaSensei"} />
        <AboutUsComponant imgUrl={"/img/gonzo1.jpg"} name={'Goncalo Rodrigues'} linkedin={"https://www.linkedin.com/in/goncalo-rodrigues07062000"} linkgithub={"https://github.com/GoncaloRod2000"}/>
        <AboutUsComponant imgUrl={"/img/aviv.jpg"} name={'Aviv Cogoluegnes'} linkedin={"https://www.linkedin.com/in/aviv-cogolugenes-b58516136/"} linkgithub={"https://github.com/Avivcogo"}/>
        </section>

        </>
    )
}


