import React from 'react'
import GunDisplay from '../GunComponent/GunDisplay'
import OrionTracker from '../OrionTracker/OrionTracker';
import MasteryTracker from '../MasteryTracker/MasteryTracker';

// This is the component for the Tracker Page, displaying the necessary Trackers and Gundisplay.jsx
export default function TrackerPage(){

    return(
        <>
            <div className='gun_page_top'>
                <div className='gun_page_top_tracker_and_title'>
                    {/* NOT USING: */}
                    {/* <h3 className='gun_page_top_title'>COD MW:II Camo Tracker:</h3> */}
                    <div className='orion_tracker_div'>
                        <OrionTracker />
                    </div>
                </div>
                {/* passing name of mastery camo hard-coded right now, can become fluid from database table! */}
                <div className='mastery_trackers_div'>
                    <MasteryTracker masterycamo="Gold" />
                    <MasteryTracker masterycamo="Platinum" />
                    <MasteryTracker masterycamo="Polyatomic" />
                </div>
            </div>
            <GunDisplay />
        </>
    )
}
