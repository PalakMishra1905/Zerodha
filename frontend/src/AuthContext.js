import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = (props)=>{

    const backendUrl = process.env.REACT_APP_BACKEND_URL;

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userData, setUserData] = useState(false)

    const value = {
        backendUrl,
        isLoggedIn, setIsLoggedIn,
        userData, setUserData
    };

    return(
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}