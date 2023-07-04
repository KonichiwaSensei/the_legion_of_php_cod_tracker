import GunBasicSlider from "../Sliders/GunBasicSlider"


export default function GunBasicChallenge({challengetext}) {

    return (
        <div className="gun_basic_challenge">
            <label className="gun_basic_challenge_text">{challengetext}</label>
            <GunBasicSlider />
        </div>
    )
}