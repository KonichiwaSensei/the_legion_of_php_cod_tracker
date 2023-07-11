import GunBasicChallenge from "./GunChallenges/GunBasicChallenge"
import GunMasteryChallenge from "./GunChallenges/GunMasteryChallenge"
import { useContext } from "react";
import { ProfileContext } from "../ProfileContext";
// 1. data being sent from GunDisplay.jsx api/weapons mapped into GunClass.jsx
// 2. GunClass.jsx sorts based on weapon_class and returns GunTracker.jsx and weapon
export default function GunTracker({ weapon }) {

    const { profileData, setProfileData, checkProfileData } = useContext(ProfileContext)

    // console.log(weapon);

    return (
        <div className="gun_component">
            {profileData.length > 0 ?
                <>
                    <h3 className="gun_name">{weapon.name}</h3>
                    <div className="gun_challenges">
                        {/* // 3. GunTracker.jsx sorts by challenge and maps to GunBasicChallenge.jsx or GunMasteryChallenge.jsx...
// ...based on is_mastery value, and and passes challengeID and challengeMaxValue */}
                        {
                            weapon.challenges.map((challenge) => {
                                return challenge.is_mastery === 0
                                    ?
                                    <GunBasicChallenge key={String("BASE" + weapon.id + "." + challenge.id)} weapon={weapon} challenge={challenge} />
                                    :
                                    null
                            })
                        }

                        <div className="gun_challenge_divider"></div>

                        {
                            weapon.challenges.map((challenge) => {
                                return challenge.is_mastery === 1
                                    ?
                                    <GunMasteryChallenge key={String("MASTERY" + weapon.id + "." + challenge.id)} weapon={weapon} challenge={challenge} />
                                    :
                                    null
                            })
                        }
                    </div>
                </>
                :
                <span className="gun_name">Loading...</span>
        }
        </div>
    )
}

// Written by: Matt