

export default function AboutUsComponant({imgUrl,name,linkedin,linkgithub}) {
    return (
        <>
           
                
                    <div className="about_us_section">
                        <img className="about_us_section_img" src={imgUrl} alt="pic"/>
                        <h3 className="about_us_section_name">{name}</h3>
                        <div className="about_us_section_links_div">
                        <a target="_blank" className="about_us_section_link" href={linkedin}>Linkedin</a>
                        <a target="blank" className="about_us_section_link" href={linkgithub}>GitHub</a>
                        </div>
                    </div>
                
            
        </>
    );
}
