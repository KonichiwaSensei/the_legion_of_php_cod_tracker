import { useState } from "react";
import MasteryProgressBar from "./MasteryProgressBar";
import './MasteryTracker.scss'

export default function MasteryTracker({ masterycamo }) {

  const [completion, setCompletion] = useState(32);

  // if (masterycamo === "Gold") {

  // }

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