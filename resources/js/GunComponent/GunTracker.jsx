import { useEffect, useRef } from "react";
import GunBasicChallenge from "./GunChallenges/GunBasicChallenge"
import GunMasteryChallenge from "./GunChallenges/GunMasteryChallenge"

import { useParams } from "react-router-dom";

export default function GunTracker({weapon}) {

    const {searchQuery} = useParams();
    const foundRef = useRef();

    console.log(searchQuery);

    // const scrollAnchor = <div></div>;
    useEffect(() => {
        searchQuery == weapon.name && foundRef.current.scrollIntoView({behavior: "smooth"})
    },[])

    return (
        <div className="gun_component">
            <div ref={foundRef} style={{position: "relative", top: "-100px"}}></div>
            <h3 className="gun_name">{(searchQuery == weapon.name ? '**' : '') + weapon.name}</h3>
            <div className="gun_challenges">
                
                {
                    weapon.challenges.map((challenge) => {
                       return challenge.is_mastery === 0
                        ?
                        <GunBasicChallenge key={String("BASE" + weapon.id + "." + challenge.id)} challenge={challenge}/>
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