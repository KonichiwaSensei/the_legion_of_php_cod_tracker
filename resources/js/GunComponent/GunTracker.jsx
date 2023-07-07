import GunBasicChallenge from "./GunChallenges/GunBasicChallenge"
import GunMasteryChallenge from "./GunChallenges/GunMasteryChallenge"

export default function GunTracker({weapon}) {

    // console.log(weapon);

    return (
        <div className="gun_component">
            <h3 className="gun_name">{weapon.name}</h3>
            <div className="gun_challenges">
                
                {
                    weapon.challenges.map((challenge) => {
                       return challenge.is_mastery === 0
                        ?
                        <GunBasicChallenge key={String("BASE" + challenge.id + "." + weapon.id)} challenge={challenge}/>
                        :
                        null
                    })
                }

                <div className="gun_challenge_divider"></div>

                {
                    weapon.challenges.map((challenge) => {
                        return challenge.is_mastery === 1
                        ?
                         <GunMasteryChallenge key={String("MASTERY" + weapon.id + "." + challenge.id)} challenge={challenge}/>
                        :
                        null
                    })
                }

            </div>
        </div>
    )
}