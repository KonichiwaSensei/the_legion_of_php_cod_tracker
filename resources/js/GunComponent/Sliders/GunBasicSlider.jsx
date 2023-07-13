import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { ProfileContext } from "../../ProfileContext";

// 1. data being sent from GunDisplay.jsx api/weapons mapped into GunClass.jsx
// 2. GunClass.jsx sorts based on weapon_class and returns GunTracker.jsx and weapon
// 3. GunTracker.jsx sorts by challenge and maps to GunBasicChallenge.jsx or GunMasteryChallenge.jsx...
// ...based on is_mastery value, and and passes challengeID and challengeMaxValue
// 4. GunBasicChallenge.jsx returns this slider and passes challengeID and challengeMaxValue
export default function GunBasicSlider({ challengeMaxValue, challengeId, weapon }) {

    // Calling ProfileContext with values defined in App.jsx calling api/profilecompletion/{profile_id}
    const { profileData, setProfileData, checkProfileData } = useContext(ProfileContext)

    // Finding challenge based on ID from array being sent by api/weapons passed through props to here
    const challenge = weapon.challenges.find(challenge => challenge.id === challengeId);

    // console.log(challengeId);

    // Used to get the user's saved challenges from the DB
    const userSavedChallenge = profileData.filter(data => (data.challenge_weapon.challenge_id === challengeId) && (data.challenge_weapon.weapon_id === weapon.id))[0];
    
    // console.log(userChallengeSavedValue);

    // Slider value being set by from challengeMaxValue (default state set to '0' if there is no challengeMaxValue)
    const [maxSliderValue, setMaxSliderValue] = useState(challengeMaxValue ? challengeMaxValue : 0);

    // Slider value being set userSavedChallenge.challenge_progress value (default state set to '0' if there is no challengeMaxValue
    const [sliderValue, setSliderValue] = useState(userSavedChallenge ? userSavedChallenge.challenge_progress : 0);

    // Sets the state of the challenge completion
    // and used to change the input to a checkbox
    // and stores value into challenge_complete row in DB
    const [challengeDone, setChallengeDone] = useState(userSavedChallenge ? userSavedChallenge.challenge_complete : false);

    // Necessary buffer for sending the data on completion of challenge
    // without this defined and called in useEffect it doesn't properly update
    const [send, setSend] = useState(0);

    // API call to store challenge value and completion
    // based on profileTokenId taken from localStorage
    const storeProfileData = async () => {
        let profileTokenId = localStorage.getItem("profile_token") ? JSON.parse(localStorage.getItem("profile_token")).id : null
        // Request with Axios:
        try {
            const response = await axios.post(`/api/profilecompletion/store`, {
                challenge_id: challengeId,
                challenge_progress: sliderValue,
                challenge_complete: challengeDone,
                challenge_weapon_id: challenge.pivot.id,
                profile_token_id: profileTokenId
            });
            return response
        } catch (error) {
            console.log(error);
        }
    };

    // On input value change sets the sliderValue
    // and returns a true challengeDone if value is maxSliderValue
    // and setSend to to send completion value on useEffect
    const handleSliderChange = (event) => {
        event.preventDefault();
        if (event.target.value == maxSliderValue) {
            setSliderValue(event.target.value);
            setChallengeDone(true);
            setSend(send + 1);
        } else {
            setSliderValue(event.target.value);
            setChallengeDone(false);
            // console.log(sliderValue);
        }
    };

    // On checkbox 'uncheck' set the sliderValue to be the maxSliderValue-1
    // set challengeDone to false
    // and setSend to to send completion value on useEffect
    const handleCheckboxChange = (event) => {
        if (event.target.checked) {
            setChallengeDone(true);
            setSliderValue(maxSliderValue)
            setSend(send + 1)
        } else {
            setChallengeDone(false);
            setSliderValue(String(parseInt(maxSliderValue) - 1));
            setSend(send + 1)
        }
    };

    // useEffect used to store challenge completion progress into DB on state "send" definded above
    // necessary for not too many api requests
    useEffect(() => {
        if (send) {
            storeProfileData()
        }
    }, [send]);


    // FIX FOR RELOAD
    useEffect(() => {
        
        setSliderValue(userSavedChallenge ? userSavedChallenge.challenge_progress : 0)

        if ((userSavedChallenge ? userSavedChallenge.challenge_progress : 0) == maxSliderValue) {
            setChallengeDone(true);
        } else {
            setChallengeDone(false);
            // console.log(sliderValue);
        }
        // console.log('boop');
    },[profileData])

    return (
        <div className="gun_basic_slider_with_tracking">
            {challengeDone ? (
                <>
                    {/* Not used on Basic slider */}
                    {/* <span className="gun_slider_tracking"> &nbsp;Complete!</span> */}
                    <input
                        type="checkbox"
                        checked={challengeDone}
                        onChange={handleCheckboxChange}
                        className="gun_basic_checkbox"
                        value={sliderValue}
                    />
                </>
            ) : (
                <>
                    <input
                        type="range"
                        min="0"
                        max={maxSliderValue}
                        step="1"
                        name="slider"
                        value={sliderValue}
                        onTouchEnd={() => { setSend(send + 1) }}
                        onMouseUp={() => { setSend(send + 1) }}
                        onChange={handleSliderChange}
                        className="gun_basic_slider"
                        id="gun_basic_slider"
                    />
                    <span className="gun_slider_tracking">{sliderValue}/{maxSliderValue}</span>
                </>
            )}
        </div>
    );
}


// Written by: Matt