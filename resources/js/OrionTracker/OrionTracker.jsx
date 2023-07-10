import { useState } from "react";
import OrionProgressBar from "./OrionProgressBar";


export default function OrionTracker() {

  const [percentage, setPercentage] = useState(73)


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