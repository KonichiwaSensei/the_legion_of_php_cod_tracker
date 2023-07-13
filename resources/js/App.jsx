import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from './Context/reducer';
import state from "./Context/state";
import Context from "./Context";

// Importing all components
import Header from './Navigation/Header/Header'
import Footer from './Navigation/Footer/Footer'
import AboutUs from "./Navigation/AboutUs/AboutUs";
import HomePage from "./HomePage/HomePage";
import TrackerPage from "./TrackerPage/TrackerPage";

// importing ProfileContex
import { ProfileContext } from "./ProfileContext";

// Our main component returing everything wrapped in Routes
// and ProfileContext.Provider
export default function App() {


    // profileData being set in checkProfileData() by setProfileData
    // also being provided as value in ProfileContext
    const [profileData, setProfileData] = useState([])
    const [profileTokenId, setProfileTokenId] = useState(null)

    // getting data from /api/profilecompletion/profileTokenID found by Token generated below
    // also being provided as value in ProfileContext
    const checkProfileData = async () => {

        // Token can be found in localStorage and we want the ID of the generated Token
        let profileTokenId = localStorage.getItem("profile_token") ? JSON.parse(localStorage.getItem("profile_token")).id : null

        // console.log(profileTokenId);
        if (profileTokenId) {
            // Request with Axios:
            try {
                const response = await axios.get(`/api/profilecompletion/${profileTokenId}`)
                // console.log(response);
                setProfileData(response.data)
                // console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }

    }

    // console.log(["App", profileData]);

    const [context, dispatch] = useReducer(reducer, state);


    const loadUser = async () => {
        // load data about the logged-in user
        const response = await fetch('/api/user', {
            headers: {
                'Accept': 'application/json'
            }
        });

        if (Math.floor(response.status / 100) !== 2) {
            // not logged in
            dispatch({
                type: 'user/set',
                payload: null
            })
        } else {
            // logged in
            const data = await response.json();

            dispatch({
                type: 'user/set',
                payload: data
            })
        }
    }

    // TOKEN CHECK
    const checkForToken = async () => {
        // Step 1: Person gets to page, we check localStorage for profileToken
        //      If no token, we make using generate() in backend ProfileTokensController
        //      If yes we go to Step 2
        // Step 2: If token exists, check with backend if it exists in database
        // Step 3: If token exists in database, return data!
        //      If not go to Step 1!
        let profileToken = JSON.parse(localStorage.getItem("profile_token"))
        // Request with Axios:
        try {
            const response = await axios.post('/api/profiletokens/validate', {
                profile_token_id: profileToken ? profileToken.id : null
            })

            if (response.data) {
                localStorage.setItem("profile_token", JSON.stringify(response.data))
            }

            setProfileTokenId(response.data)
            return response.data

        } catch (error) {
            console.log(error);
        }
    }

    // whenever the user in the context changes to false
    // reload user information
    useEffect(() => {
        if (context.user === false) {
            loadUser()
        }
    }, [context.user]);

    // On page load: check for token and check profile data based on token_id
    useEffect(() => {
        (async () => {
            loadUser()
            const tokenResponse = await checkForToken()
        })()
    }, [])

    // FIX FOR RELOAD
    useEffect(() => {
        checkProfileData()
    }, [profileTokenId])

    // console.log(profileData, profileTokenId);

    // useEffect(() => {console.log("refreshing app")},[profileData])


    return (
        <>

            <Context.Provider value={{ context, dispatch }}>
                {/* Setting ProfileContext Provider and giving values necessary for MasteryTracker.jsx and GunTracker.jsx */}
                <ProfileContext.Provider value={{ profileData, profileTokenId, setProfileData, checkProfileData, setProfileTokenId }}>
                    <BrowserRouter>
                        <Header />
                        {/* {console.log(profileData)} */}

                        <Routes>
                            <Route path='/' element={<HomePage />} />
                            <Route path='tracker' element={<TrackerPage />} />
                            <Route path='tracker/:searchQuery' element={<TrackerPage />} />
                            <Route path='about-us' element={<AboutUs />} />
                        </Routes>
                        <Footer />
                    </BrowserRouter>
                </ProfileContext.Provider>
            </Context.Provider>
        </>
    )
}