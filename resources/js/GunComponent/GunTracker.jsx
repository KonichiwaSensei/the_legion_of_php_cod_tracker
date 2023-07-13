import { useEffect, useRef, useState } from "react";
import GunBasicChallenge from "./GunChallenges/GunBasicChallenge";
import GunMasteryChallenge from "./GunChallenges/GunMasteryChallenge";
import { useContext } from "react";
import { ProfileContext } from "../ProfileContext";
import { useParams } from "react-router-dom";

// 1. data being sent from GunDisplay.jsx api/weapons mapped into GunClass.jsx
// 2. GunClass.jsx sorts based on weapon_class and returns GunTracker.jsx and weapon
export default function GunTracker({ weapon }) {
    // Calling ProfileContext with values defined in App.jsx calling api/profilecompletion/{profile_id}
    const { profileData, checkProfileData } = useContext(ProfileContext);

    // console.log(profileData);

    // used to get searchQuery from SearchBar.jsx using useParams
    const { searchQuery } = useParams();
    const foundRef = useRef(); // useRef for scrolling behaviour

    // Using regular expression to get rid of any white spaces and hyphens in both weapon.name and in searchQuery
    const filteredWeaponResult = weapon.name ? weapon.name.toLowerCase().replace(/[\s-]/g, '') : null;
    const filteredSearchQuery = searchQuery ? searchQuery.toLowerCase().replace(/[\s-]/g, '') : null;

    // console.log('Search Query: ' + ' ' + searchQuery + ' ' + 'Weapon Name: ' + ' ' + weapon.name + " | | | " + 'Filtered Search: ' + ' ' + filteredSearchQuery + ' ' + 'Filtered Weapon Name: ' + ' ' + filteredWeaponResult)

    // Setting background colour based on search:
    const [backgroundColour, setBackgroundColour] = useState('')

    const changeDivStyleToMatchSearch = () => {
        // If in filtered searchQuery and weapon.name any character matches then:
        if (
            filteredSearchQuery &&
            filteredWeaponResult &&
            filteredWeaponResult.includes(filteredSearchQuery)
        ) {
            setBackgroundColour('#0f2226')
        } else
            setBackgroundColour('')
    }

    const backgroundStyle = {
        background: backgroundColour
    };


    // useEffect for scrolling and filtering
    useEffect(() => {
        // If in filtered searchQuery and weapon.name any character matches then:
        if (
            filteredSearchQuery &&
            filteredWeaponResult &&
            filteredWeaponResult.includes(filteredSearchQuery)
        ) {
            foundRef.current.scrollIntoView({ behavior: "smooth", inline: "center" })
            changeDivStyleToMatchSearch()
        }
    }, []);


    // FIX FOR RELOAD
    useEffect(() => {

    }, [profileData])

    // console.log(["GunTracker", profileData]);

    return (
        <div className="gun_component" style={backgroundStyle}>
            <div
                ref={foundRef}
                style={{ position: "relative", top: "-240px" }}
            ></div>
            {
                profileData
                    ?
                    <>
                        <h3 className="gun_name" >
                            {
                                // If in filtered searchQuery and weapon.name any character matches then:
                                filteredSearchQuery
                                    &&
                                    filteredWeaponResult
                                    &&
                                    filteredWeaponResult.includes(filteredSearchQuery)
                                    ? weapon.name + "*"
                                    : weapon.name
                            }
                        </h3>
                        <div className="gun_challenges">
                            {/* // 3. GunTracker.jsx sorts by challenge and maps to GunBasicChallenge.jsx or GunMasteryChallenge.jsx... */}
                            {/* // ...based on is_mastery value, and and passes challengeID and challengeMaxValue */}
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
                    :
                    <span className="gun_name">Loading...</span>
            }
        </div>
    );
}

// Written by: Matt
