

export default function AboutUsComponant({imgUrl,para,Linkedin,github}) {
    return (
        <>
           
                
                    <div className="crazy">
                        <img className="crazy-img" src={imgUrl} alt="pic"/><br/>
                        <p>{para}</p>
                        <a className="Linkedin" href={Linkedin}>Linkedin</a><br/>
                        <a className="github" href={github}>GitHub</a><br/>
                    </div>
                
            
        </>
    );
}
