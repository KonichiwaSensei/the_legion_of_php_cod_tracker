import React from 'react'
import ReactDOM from 'react-dom/client'
import GunClass from './GunClass'
import OrionTracker from '../OrionTracker/OrionTracker'
import MasteryTracker from '../MasteryTracker/MasteryTracker'

export default function GunDisplay() {

    return (
        <div className='gun_page'>
            <div className='gun_trackers'>
                <GunClass classname="Assault Rifles" />
                <GunClass classname="Battle Rifles" />
                <GunClass classname="Sub-Machine Guns" />
            </div>
        </div>
    )
}


