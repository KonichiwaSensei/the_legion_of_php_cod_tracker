import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import TrackerPage from "./TrackerPage/TrackerPage";
import { useState, useEffect, useReducer } from "react";
import Header from './Navigation/Header/Header'
import Footer from './Navigation/Footer/Footer'
import AboutUs from "./Navigation/AboutUs/AboutUs";
import axios from "axios";
import reducer from './Context/reducer';
import state from "./Context/state";
import Context from "./Context";

export default function App() {

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

    useEffect(() => {
        loadUser()
    }, []);

    // whenever the user in the context changes to false
    // reload user information
    useEffect(() => {
        if (context.user === false) {
            loadUser()
        }
    }, [context.user]);

    // const [token, setToken] = useState(null);

    const checkForToken = async () => {
        let profileToken = JSON.parse(localStorage.getItem("profile_token"))

        console.log(profileToken)
        // Request with Axios:
        try {
            const response = await axios.post('/api/profiletokens/validate', {
                profile_token_id: profileToken ? profileToken.id : null
            })
            
            if (response.data) {
                localStorage.setItem("profile_token", JSON.stringify(response.data))
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        checkForToken()
    }, [])

    // Step 1: Person gets to page, we check localStorage for PersonalToken
    // If no token, we make using generateRandomString()
    // If yes we go to Step 2
    // Step 2: If token exists, check with backend if it exists in database
    // Step 3: If token exists in database, return data! (Done)
    // If not go to Step 4:
    // Step 4: If no token found in same request generate token (using backend)

    return (
         <Context.Provider value={ { context, dispatch } }>
            <BrowserRouter>
            <Header />
              {/* <button onClick={async() => {
                const response = await axios.post('/logout')
                console.log(response);
            }}>LOGOUT</button>  */}

            {/* <button onClick={async () => {
                const response = await axios.get('/api/user')
                console.log(response.data);
            }}>Get User</button>  */}
            {/* <button onClick={() => { setClicks(clicks + 1) }}>{clicks}</button>
            <button onClick={() => {
                localStorage.setItem("count", JSON.stringify(clicks));
            }}>Save</button>
            <button onClick={() => {
                const loaded = JSON.parse(localStorage.getItem("count"));
                console.log(localStorage);
            }}>Load</button>
            <button>Retrieved Data: </button> */}

            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='tracker' element={<TrackerPage />} />
                <Route path='about-us' element={<AboutUs />} />
            </Routes>
            <Footer />
            </BrowserRouter>
        </Context.Provider>
    )
}