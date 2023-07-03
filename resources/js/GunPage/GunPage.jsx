import React from 'react'
import ReactDOM from 'react-dom/client'
import GunClass from './GunComponent/GunClass'

ReactDOM.createRoot(document.getElementById('gun_page_render')).render(
    <>
    <GunClass classname="Assault Rifles"/>
    <GunClass classname="Battle Rifles"/>
    <GunClass classname="Sub-Machine Guns"/>
    </>
)