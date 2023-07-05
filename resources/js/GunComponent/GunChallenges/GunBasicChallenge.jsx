import GunBasicSlider from "../Sliders/GunBasicSlider"

// This component returns the Basic Slider component wrapped for styling purposes
export default function GunBasicChallenge({challengetext}) {

    return (
        <div className="gun_basic_challenge">
            <label className="gun_basic_challenge_text">{challengetext}</label>
            <GunBasicSlider />
        </div>
    )
}