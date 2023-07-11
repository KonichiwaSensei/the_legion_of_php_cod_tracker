import { useEffect, useState, useContext } from "react";
import { ProfileContext } from "../ProfileContext";

import MasteryProgressBar from "./MasteryProgressBar";

// MasteryTracker.jsx recieves masterycamo from TrackerPage/HomePage
export default function MasteryTracker({ masterycamo }) {

  // Calling ProfileContext with values defined in App.jsx calling api/profilecompletion/{profile_id}
  const { profileData, checkProfileData } = useContext(ProfileContext)

  // completion useState boolean
  const [completion, setCompletion] = useState(0);

  // useEffect used to store challenge completion progress into DB on state change of profileData
  useEffect(() => {
    // mastery_temp is temporary profileData, ALL filtered to require:
    //    where challenge_text from challenges table is equal to masterycamo (name being passed from TrackerPage/HomePage)
    //    and the challenge is_mastery value is "true"
    //    and the challenge_complete value from challenge_weapon table is "true"
    const mastery_temp = profileData ? profileData.filter(data => (data.challenge_weapon.challenge.mastery_text == masterycamo) && (data.challenge_weapon.challenge.is_mastery) && (data.challenge_complete)) : null;
    // console.log(mastery_temp);
    setCompletion(mastery_temp.length); // set the completion value to 1 ("true")
  }, [profileData])

  return (
    <div className="mastery_tracker">
      <div className={`mastery_image mastery_image-${masterycamo}`} alt={masterycamo}>
        {
          completion === 51
            // if the completion is equal to 51 (the max value required in COD)
            ?
            <div className="mastery_tracker_title_div">
              <span className="mastery_tracker_title">{masterycamo} Complete</span>
            </div>
            :
            <div className="mastery_tracker_title_div">
              <span className="mastery_tracker_title">{masterycamo} Progress</span>
            </div>
        }
      </div>
      <MasteryProgressBar
        completion={completion}
        masterycamo={masterycamo}
      />
    </div>
  );
}


// Written by: Matt