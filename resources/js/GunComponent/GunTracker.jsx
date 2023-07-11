import { useEffect, useRef } from "react";
import GunBasicChallenge from "./GunChallenges/GunBasicChallenge";
import GunMasteryChallenge from "./GunChallenges/GunMasteryChallenge";
import { useContext } from "react";
import { ProfileContext } from "../ProfileContext";
import { useParams } from "react-router-dom";

// 1. data being sent from GunDisplay.jsx api/weapons mapped into GunClass.jsx
// 2. GunClass.jsx sorts based on weapon_class and returns GunTracker.jsx and weapon
export default function GunTracker({ weapon }) {
    // Calling ProfileContext with values defined in App.jsx calling api/profilecompletion/{profile_id}
    const { profileData } = useContext(ProfileContext);

    const { searchQuery } = useParams();
    const foundRef = useRef();

    console.log(searchQuery);

    // const scrollAnchor = <div></div>;
    useEffect(() => {
        searchQuery == weapon.name &&
            foundRef.current.scrollIntoView({ behavior: "smooth" });
    }, []);

    return (
        <div className="gun_component">
            <div
                ref={foundRef}
                style={{ position: "relative", top: "-240px" }}
            ></div>
            {/* If profileData has a length of more than 0 show the tracker, otherwise not */}
            {/* {profileData.length > 0 ? */}
            <>
                <h3 className="gun_name">
                    {(searchQuery == weapon.name.toLowerCase() ? "**" : "") + weapon.name}
                </h3>       
                <div className="gun_challenges">
                    {/* // 3. GunTracker.jsx sorts by challenge and maps to GunBasicChallenge.jsx or GunMasteryChallenge.jsx...
// ...based on is_mastery value, and and passes challengeID and challengeMaxValue */}
                    {weapon.challenges.map((challenge) => {
                        return challenge.is_mastery === 0 ? (
                            <GunBasicChallenge
                                key={String(
                                    "BASE" + weapon.id + "." + challenge.id
                                )}
                                weapon={weapon}
                                challenge={challenge}
                            />
                        ) : null;
                    })}

                    <div className="gun_challenge_divider"></div>

                    {weapon.challenges.map((challenge) => {
                        return challenge.is_mastery === 1 ? (
                            <GunMasteryChallenge
                                key={String(
                                    "MASTERY" + weapon.id + "." + challenge.id
                                )}
                                weapon={weapon}
                                challenge={challenge}
                            />
                        ) : null;
                    })}
                </div>
            </>
            {/* :
                <span className="gun_name">Loading...</span>
            } */}
        </div>
    );
}

// Written by: Matt
