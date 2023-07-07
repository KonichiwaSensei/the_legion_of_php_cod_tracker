import { useState } from "react"
import GunMasterySlider from "../Sliders/GunMasterySlider"

// This component returns the Mastery Slider component wrapped for styling purposes
export default function GunMasteryChallenge({challenge}) {


    return (
        <div className="gun_mastery_challenge">
            <label className="gun_mastery_challenge_text">{challenge.mastery_text}: {challenge.text}</label>
            <GunMasterySlider challengeMaxValue={challenge.max_value}/>
        </div>
    )

}