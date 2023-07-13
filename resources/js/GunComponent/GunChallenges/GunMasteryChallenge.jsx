import GunMasterySlider from "../Sliders/GunMasterySlider"

// 1. data being sent from GunDisplay.jsx api/weapons mapped into GunClass.jsx
// 2. GunClass.jsx sorts based on weapon_class and returns GunTracker.jsx and weapon
// 3. GunTracker.jsx sorts by challenge and maps to GunBasicChallenge.jsx or GunMasteryChallenge.jsx...
// ...based on is_mastery value, and and passes challengeID and challengeMaxValue
export default function GunMasteryChallenge({ challenge, weapon }) {
    
    return (
        <div className="gun_mastery_challenge">
            <label className="gun_mastery_challenge_text">{challenge.mastery_text}: {challenge.text}</label>
            {/* // 4. GunMasteryChallenge.jsx returns this slider and passes challengeID and challengeMaxValue */}
            <GunMasterySlider key={challenge.id} challengeMaxValue={challenge.max_value} weapon={weapon} challengeId={challenge.id} />
        </div>
    )
}


// Written by: Matt