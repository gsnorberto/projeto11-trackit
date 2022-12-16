import { createContext } from "react";
import { useState } from "react";

const Context = createContext();

function AuthProvider({ children }) {
    //Local storage
    let storedUser = localStorage.getItem("userData");
    let userData;
    if (storedUser) {
        userData = JSON.parse(storedUser);
    }
    
    const [auth, setAuth] = useState(false);
    const [habitsPercentage, setHabitsPercentage] = useState(0);

    const data = {
        auth,
        setAuth,
        userData,
        habitsPercentage,
        setHabitsPercentage
    }

    return(
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export { Context, AuthProvider }