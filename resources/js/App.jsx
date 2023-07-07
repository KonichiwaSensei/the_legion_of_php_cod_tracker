import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import TrackerPage from "./TrackerPage/TrackerPage";
import { useState, useEffect } from "react";
import Header from './Navigation/Header/Header'
import Footer  from './Navigation/Footer/Footer'
import AboutUs from "./Navigation/AboutUs/AboutUs";

export default function App() {

    const [clicks, setClicks] = useState(0)
    const [token, setToken] = useState(null);

    const initializeApp = async () => {
        // try {
        //     const response = await axios.get('/' + tokenId)
        
        
        // };
        
        console.log(`checking if there's token in local storage`)
        console.log(`If token exists, check with backend it's valid`)
        console.log(`If token is valid, fetch data for that token (this and previous step can be handled at the same time by the backend)`)
        console.log(`If token invalid as decided by backend:`)
        console.log(`-- call different API to start a new token and send it back to React`);
        console.log(`-- save the new token into local storage`);
    }

    useEffect(() => {
        initializeApp()
    }, [])

    return (
        <>
            <Header />
            <button onClick={() => { setClicks(clicks + 1) }}>{clicks}</button>
            <button onClick={() => {
                localStorage.setItem("count", JSON.stringify(clicks));
            }}>Save</button>
            <button onClick={() => {
                const loaded = JSON.parse(localStorage.getItem("count"));
                console.log(loaded);
            }}>Load</button>
            <button>Retrieved Data: </button>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='tracker' element={<TrackerPage />} />
                <Route path='about-us' element={<AboutUs />} />
            </Routes>
            <Footer />

        </>
    )
}