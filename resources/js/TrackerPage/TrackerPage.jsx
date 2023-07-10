import React from 'react'
import GunDisplay from '../GunComponent/GunDisplay'
import OrionTracker from '../OrionTracker/OrionTracker';
import MasteryTracker from '../MasteryTracker/MasteryTracker';

export default function TrackerPage({profileData}){



    return(
        <>
            <div className='gun_page_top'>
                <div className='gun_page_top_tracker_and_title'>
                    {/* <h3 className='gun_page_top_title'>COD MW:II Camo Tracker:</h3> */}
                    <div className='orion_tracker_div'>
                        <OrionTracker />
                    </div>
                </div>
    
                <div className='mastery_trackers_div'>
                    <MasteryTracker profileData={profileData} masterycamo="Gold" />
                    <MasteryTracker profileData={profileData} masterycamo="Platinum" />
                    <MasteryTracker profileData={profileData} masterycamo="Polyatomic" />
                </div>
            </div>
            <GunDisplay profileData={profileData}/>
        </>
    )
}
