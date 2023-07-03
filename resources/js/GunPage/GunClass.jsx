import GunTracker from "./GunComponent/GunTracker";

export default function GunClass({classname}) {


    return (
        <>
            <div className="gun_class_section">
                <h1 className="gun_class_section_title">{classname}</h1>
                <div className="gun_class_guns">
                    <GunTracker />
                    <GunTracker />
                    <GunTracker />
                    <GunTracker />
                    <GunTracker />
                    <GunTracker />
                    <GunTracker />
                </div>
                <div className="gun_class_section_divider"></div>
            </div>
        </>
    )
}