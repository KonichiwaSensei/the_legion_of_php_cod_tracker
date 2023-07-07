import React, { useEffect, useState } from 'react'
import GunClass from './GunClass'
import axios from 'axios'

export default function GunDisplay() {

    const [weapons, setWeapons] = useState([]);

    const loadWeapons = async () => {
        // Request with Axios:
        try {
            const response = await axios.get('/api/weapons')
            // console.log(response);
            setWeapons(response.data)
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadWeapons()
    }, [])

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


