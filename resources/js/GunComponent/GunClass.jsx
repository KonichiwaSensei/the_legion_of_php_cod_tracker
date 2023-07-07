import GunTracker from "./GunTracker";

export default function GunClass({classname, weaponClass}) {

    // console.log(weaponClass.weapons);

    return (
        <>
            <div className="gun_class_section">
                <h1 className="gun_class_section_title">{classname}</h1>
                <div className="gun_class_guns">
                    {
                        weaponClass.weapons.map((weapon) => {
                           return <GunTracker key={weapon.id} weapon={weapon}/>
                        })
                    }
                </div>
                <div className="gun_class_section_divider"></div>
            </div>
        </>
    )
}