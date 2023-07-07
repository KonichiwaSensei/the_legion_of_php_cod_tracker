import GunBasicSlider from "../Sliders/GunBasicSlider"

// This component returns the Basic Slider component wrapped for styling purposes
export default function GunBasicChallenge({challenge}) {

    // console.log(challenge);

    return (
        <div className="gun_basic_challenge">
            <label className="gun_basic_challenge_text">{challenge.text}</label>
            <GunBasicSlider key={challenge.id} challengeMaxValue={challenge.max_value}/>
        </div>
    )
}