import { useState } from "react"
import GunMasterySlider from "../Sliders/GunMasterySlider"


export default function GunMasteryChallenge({masteryname}) {



    return (
        <div className="gun_mastery_challenge">
            <label className="gun_mastery_challenge_text">{masteryname} Challenge</label>
            <GunMasterySlider />
        </div>
    )

}