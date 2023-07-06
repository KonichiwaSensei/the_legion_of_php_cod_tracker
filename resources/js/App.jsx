import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import TrackerPage from "./TrackerPage/TrackerPage";
import { useState } from "react";
import Header from './Navigation/Header/Header'
import Footer  from './Navigation/Footer/Footer'

export default function App() {

    // const [clicks, setClicks] = useState(0)
    return (
        <>
            <Header />
            {/* <button onClick={() => { setClicks(clicks + 1) }}>{clicks}</button> */}
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='tracker' element={<TrackerPage />} />
            </Routes>
            <Footer />

        </>
    )
}