import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { ProfileContext } from "../../ProfileContext";

// This component returns a Mastery Slider
export default function GunMasterySlider({ challengeMaxValue, challengeId, weapon /*, profileData*/ }) {

    const { profileData, checkProfileData } = useContext(ProfileContext)

    const challenge = weapon.challenges.find(challenge => challenge.id === challengeId);
    // console.log(challengeId);

    const userSavedChallenge = profileData.filter(data => (data.challenge_weapon.challenge_id === challengeId) && (data.challenge_weapon.weapon_id === weapon.id))[0];
    // console.log(userChallengeSavedValue);
    // Slider value being set by API (default state '50' for now)
    const [maxSliderValue, setMaxSliderValue] = useState(challengeMaxValue);

    // Slider value being set by event.target.value
    const [sliderValue, setSliderValue] = useState(userSavedChallenge ? userSavedChallenge.challenge_progress : '0');

    // Sets the state of the challenge completion
    // and used to change the input to a checkbox
    const [challengeDone, setChallengeDone] = useState(userSavedChallenge ? userSavedChallenge.challenge_complete : false);

    const [send, setSend] = useState(0);

    // API call to store challenge value and completion
    const storeProfileData = async () => {
        let profileTokenId = localStorage.getItem("profile_token") ? JSON.parse(localStorage.getItem("profile_token")).id : null;
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
            // console.log(weapon);
        } catch (error) {
            console.log(error);
        }
    };

    // On input value change sets the sliderValue
    // and returns a true challengeDone if value is maxSliderValue
    const handleSliderChange = (event) => {
        event.preventDefault();
        let done = false;
        console.log(event.target);
        if (event.target.value == maxSliderValue) {
            setSliderValue(event.target.value);
            console.log("Boo");
            setChallengeDone(true);
            
            setSend(send + 1);

            done = true;
        } else {
            setSliderValue(event.target.value);
            setChallengeDone(false);
            
            // console.log(sliderValue);
        }
    };

    // On checkbox 'uncheck' set the sliderValue to be the maxSliderValue-1
    // and challengeDone to false
    const handleCheckboxChange = (event) => {
        let done = true;
        if (event.target.checked) {
            setChallengeDone(true);
            setSliderValue(maxSliderValue);
            setSend(send + 1)
            
        } else {
            setChallengeDone(false);
            done = false;
            setSliderValue(String(parseInt(maxSliderValue) - 1));
            setSend(send + 1)
        }
    };

    useEffect(() => {
        if (send) {
            const whatever = async () => {
                const response = await storeProfileData()
                console.log(response);
                response && checkProfileData();
            }
            whatever()
        }
    }, [send]);

    return (
        <div className="gun_mastery_slider_with_tracking">
            {challengeDone ? (
                <>
                    <input
                        type="checkbox"
                        checked={challengeDone}
                        onChange={handleCheckboxChange}
                        className="gun_mastery_checkbox"
                        value={sliderValue}
                    />
                    <span className="gun_slider_tracking_mastery">Challenge Complete!</span>
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
                        className="gun_mastery_slider"
                        id="gun_mastery_slider"
                    />
                    <span className="gun_slider_tracking">{sliderValue}/{maxSliderValue}</span>
                </>
            )}
        </div>
    );
}

