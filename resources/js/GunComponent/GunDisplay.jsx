import React, { useEffect, useState } from 'react'
import GunClass from './GunClass'
import axios from 'axios'

export default function GunDisplay() {

    const [weaponsClasses, setWeaponClasses] = useState([]);

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

    // const profileChallengeCompletions = async () => {
    //     // Request with Axios:
    //     try {
    //         const response = await axios.get('/api/complete')
    //         // console.log(response);
    //         response.data
    //         // console.log(response.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    useEffect(() => {
        loadWeapons()
        // console.log(weapons.name);
    }, [])

    return (
        <>
            {
                weaponsClasses
                    ?
                    <div className='gun_page'>
                        < div className='gun_trackers' >
                            {
                                weaponsClasses.map((weaponClass) => {
                                    return <GunClass key={weaponClass.id} classname={weaponClass.name} weaponClass={weaponClass}/>
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


