import GunBasicChallenge from "./GunChallenges/GunBasicChallenge"
import GunMasteryChallenge from "./GunChallenges/GunMasteryChallenge"

export default function GunTracker() {


    return (
        <div className="gun_component">
            <h3 className="gun_name">Gun Name</h3>
            <div className="gun_challenges">
                
                <GunBasicChallenge challengetext={"Challenge 1"}/>
                <GunBasicChallenge challengetext={"Challenge 2"}/>
                <GunBasicChallenge challengetext={"Challenge 3"}/>
                <GunBasicChallenge challengetext={"Challenge 4"}/>

                <div className="gun_challenge_divider"></div>

                <GunMasteryChallenge masteryname="Gold"/>
                <GunMasteryChallenge masteryname="Platinum"/>
                <GunMasteryChallenge masteryname="Polyatomic"/>
            </div>
        </div>
    )
}