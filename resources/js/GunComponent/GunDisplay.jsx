import React from 'react'
import ReactDOM from 'react-dom/client'
import GunClass from './GunClass'
import OrionTracker from '../OrionTracker/OrionTracker'
import MasteryTracker from '../MasteryTracker/MasteryTracker'

ReactDOM.createRoot(document.getElementById('gun_page_render')).render(
    <>
        <div className='gun_page'>
            <div className='orion_tracker_div'>
                <OrionTracker />
            </div>
            <div className='mastery_trackers_div'>
                <MasteryTracker masterycamo="Gold" />
                <MasteryTracker masterycamo="Platinum" />
                <MasteryTracker masterycamo="Polyatomic" />
            </div>
            <div className='gun_trackers'>
                <GunClass classname="Assault Rifles" />
                <GunClass classname="Battle Rifles" />
                <GunClass classname="Sub-Machine Guns" />
            </div>
        </div>
    </>
)