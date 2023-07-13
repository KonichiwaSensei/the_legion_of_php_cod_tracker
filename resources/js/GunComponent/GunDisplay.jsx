import React, { useContext, useEffect, useState } from 'react'
import { ProfileContext } from "../ProfileContext";
import GunClass from './GunClass'
import axios from 'axios'

// Main returing component for the TrackerPage
export default function GunDisplay() {

    const [weaponsClasses, setWeaponClasses] = useState([]);

    const { profileData } = useContext(ProfileContext);

    // used to get all info necessary to display components with ALL info of weapons
    const loadWeapons = async () => {
        // Request with Axios:
        try {
            const response = await axios.get('/api/weapons')
            // console.log(response);
            setWeaponClasses(response.data)
            // console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    
    // On page load: loadWeapons
    useEffect(() => {
        loadWeapons()
    }, [])

    return (
        <>
        {/* // 1. data being sent from GunDisplay.jsx api/weapons mapped into GunClass.jsx passing className and weaponClass */}
            {
                weaponsClasses
                    ?
                    <div className='gun_page'>
                        < div className='gun_trackers' >
                            {
                                weaponsClasses.map((weaponClass) => {
                                    return <GunClass key={weaponClass.id} className={weaponClass.name} weaponClass={weaponClass} />
                                })
                            }
                        </div >
                    </div >
                    :
                    <div className='gun_page'>Loading...</div>
            }
        </>
    )
}


// Written by: Matt