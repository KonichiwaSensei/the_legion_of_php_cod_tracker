import { useEffect, useState, useContext } from "react";
import MasteryProgressBar from "./MasteryProgressBar";
import { ProfileContext } from "../ProfileContext";


export default function MasteryTracker({ masterycamo }) {

  const { profileData, checkProfileData } = useContext(ProfileContext)

  const [completion, setCompletion] = useState(0);
  


  useEffect(() => {
    const mastery_temp = profileData.filter(data => (data.challenge_weapon.challenge.mastery_text == masterycamo) && (data.challenge_weapon.challenge.is_mastery) && (data.challenge_complete));
    // console.log(mastery_temp);
    setCompletion(mastery_temp.length);
  },[profileData])
  

  return (
    <div className="mastery_tracker">
      <div className={`mastery_image mastery_image-${masterycamo}`} alt={masterycamo}>
        {
          completion === 51
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