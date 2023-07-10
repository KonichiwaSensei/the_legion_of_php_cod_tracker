import { useEffect, useState, useContext } from "react";
import { ProfileContext } from "../ProfileContext";

import OrionProgressBar from "./OrionProgressBar";

export default function OrionTracker() {

  // Calling ProfileContext with values defined in App.jsx calling api/profilecompletion/{profile_id}
  const { profileData, checkProfileData } = useContext(ProfileContext);

  // completion useState integer
  const [percentage, setPercentage] = useState(0)

  // useEffect used to store challenge completion progress into DB on state change of profileData
  useEffect(() => {
    // mastery_temp is temporary profileData, ALL filtered to require:
    //    where the challenge is_mastery value is "true"
    //    and the challenge_complete value from challenge_weapon table is "true"
    const mastery_temp = profileData.filter(data => (data.challenge_weapon.challenge.is_mastery) && (data.challenge_complete));
    console.log(mastery_temp);
    setPercentage(mastery_temp.length); // set the completion value to 1 ("true")
  }, [profileData])

  return (
    <div className="orion_tracker">
      {
        percentage === 100
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
    </div>
  );
}


// Written by: Matt