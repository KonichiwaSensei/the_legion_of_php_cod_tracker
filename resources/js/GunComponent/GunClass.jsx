import GunTracker from "./GunTracker";

// importing necessary images from resources for class weapon image
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
// import { useContext } from "react";
// import { ProfileContext } from "../ProfileContext";

// 1. data being sent from GunDisplay.jsx api/weapons mapped into GunClass.jsx passing className and weaponClass
export default function GunClass({ className, weaponClass }) {

    // const { profileData } = useContext(ProfileContext);

    // Making class name all lowercase and no spaces using regular expression
    const classnameLowerCaseNoSpace = className.replace(/\s+/g, '').toLowerCase();

    // defining variable image
    let image = null

    // switch based on the classnameLowerCaseNoSpace value and returning imported image from resources
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
        case "handguns":
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
                    <h1 className="gun_class_section_title">{className}</h1>
                    <div className={`gun_class_image gun_class_image-${classnameLowerCaseNoSpace}`} style={fillerStyles} ></div>
                </div>
                <div className="gun_class_guns">
                    {/* // 2. GunClass.jsx sorts based on weapon_class and returns GunTracker.jsx and weapon */}
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

// Written by: Matt