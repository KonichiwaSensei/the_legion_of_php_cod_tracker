import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GunDisplay from './GunComponent/GunDisplay'
import OrionTracker from './OrionTracker/OrionTracker';
import MasteryTracker from './MasteryTracker/MasteryTracker';


ReactDOM.createRoot(document.getElementById('gun_page_render')).render(
    <>
        <div className='orion_tracker_div'>
            <OrionTracker />
        </div>
        <div className='mastery_trackers_div'>
            <MasteryTracker masterycamo="Gold" />
            <MasteryTracker masterycamo="Platinum" />
            <MasteryTracker masterycamo="Polyatomic" />
        </div>
        <GunDisplay />
    </>
)