

export default function AboutUsComponant({imgUrl,name,linkOne,linkTwo}) {
    return (
        <>
           
                
                    <div className="about_us_section">
                        <img className="about_us_section_img" src={imgUrl} alt="pic"/>
                        <h3 className="about_us_section_name">{name}</h3>
                        <div className="about_us_section_links_div">
                        <a className="about_us_section_link" href={linkOne}>Linkedin</a>
                        <a className="about_us_section_link" href={linkTwo}>GitHub</a>
                        </div>
                    </div>
                
            
        </>
    );
}
