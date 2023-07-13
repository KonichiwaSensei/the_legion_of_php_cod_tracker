import { useEffect, useState, useContext } from "react";
import { ProfileContext } from "../ProfileContext";

import OrionProgressBar from "./OrionProgressBar";
import confetti from './ConfettiOrionPallet.json'

// For confetti animation:
import Lottie from 'react-lottie-player'


export default function OrionTracker() {

  // Calling ProfileContext with values defined in App.jsx calling api/profilecompletion/{profile_id}
  const { profileData, checkProfileData } = useContext(ProfileContext);

  // completion useState integer
  const [percentage, setPercentage] = useState(0)

  // Confetti state
  const [style, setStyle] = useState('none')

  // Confetti style
  const confettiStyle = {
    display: style
  };

  // useEffect used to store challenge completion progress into DB on state change of profileData
  useEffect(() => {
    // mastery_temp is temporary profileData, ALL filtered to require:
    //    where the challenge is_mastery value is "true"
    //    and the challenge_complete value from challenge_weapon table is "true"
    const mastery_temp = profileData ? profileData.filter(data => (data.challenge_weapon.challenge.is_mastery) && (data.challenge_complete)) : null;
    // console.log(mastery_temp);
    let percentageCounted = Math.min(Math.round((mastery_temp.length * 100) / 153), 100);
    setPercentage(percentageCounted);

    if (percentageCounted >= 100) {
      setStyle('block')

      setTimeout(() => {
        setStyle('none')
      }, 5000)
    }
  }, [profileData])

  return (
    <div className="orion_tracker">
      {
        percentage >= 100
          ?
          <div className="orion_tracker_title_div">
            <span className="orion_tracker_title">Orion Mastery Complete</span>
          </div>
          :
          <div className="orion_tracker_title_div">
            <span className="orion_tracker_title">Orion Mastery Progress</span>
            <span className="orion_tracker_title_percentage_left">{100 - percentage}%  Left</span>
          </div>
      }
      <OrionProgressBar
        completed={percentage}
      />
      {

      }
      <Lottie
        loop
        animationData={confetti}
        play
        className="confetti"
        style={confettiStyle}
      />
    </div>
  );
}


// Written by: Matt