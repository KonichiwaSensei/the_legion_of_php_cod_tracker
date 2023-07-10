import GunTracker from "./GunTracker";

import Assault from '/resources/img/guns/assaultrifle.png'
import Battle from '/resources/img/guns/battlerifle.png'
import Submachine from '/resources/img/guns/smg.png'
import Shotgun from '/resources/img/guns/shotgun.png'
import LMG from '/resources/img/guns/lmg.png'
import Marksman from '/resources/img/guns/marksman.png'
import Sniper from '/resources/img/guns/sniperrifle.png'
import Pistol from '/resources/img/guns/pistol.png'
import Launcher from '/resources/img/guns/rocketlauncher.png'
import Melee from '/resources/img/guns/melee.png'

export default function GunClass({ classname, weaponClass }) {


    const classnameLowerCaseNoSpace = classname.replace(/\s+/g, '').toLowerCase();

    let image = null
    switch (classnameLowerCaseNoSpace) {
        case "assaultrifles":
            image = Assault;
            break;
        case "battlerifles":
            image = Battle;
            break;
        case "submachineguns":
            image = Submachine;
            break;
        case "shotguns":
            image = Shotgun;
            break;
        case "lightmachineguns":
            image = LMG;
            break;
        case "marksmanrifles":
            image = Marksman;
            break;
        case "sniperrifles":
            image = Sniper;
            break;
        case "handgun":
            image = Pistol;
            break;
        case "launchers":
            image = Launcher;
            break;
        case "melee":
            image = Melee;
            break;
    }

    const fillerStyles = {
        backgroundImage: `url(${image})`
    }


    return (
        <>
            <div className="gun_class_section">
                <div className="gun_class_section_title_image_div">
                    <h1 className="gun_class_section_title">{classname}</h1>
                    <div className={`gun_class_image gun_class_image-${classnameLowerCaseNoSpace}`} style={fillerStyles} ></div>
                </div>
                <div className="gun_class_guns">
                    {
                        weaponClass.weapons.map((weapon) => {
                            return <GunTracker key={weapon.id} weapon={weapon} />
                        })
                    }
                </div>
                {/* <div className="gun_class_section_divider"></div> */}
            </div>
        </>
    )
}