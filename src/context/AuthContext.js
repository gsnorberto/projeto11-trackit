import { getLocalStorage } from "../localStorage";
import { createContext, useEffect } from "react";
import { useState } from "react";

const Context = createContext();


function AuthProvider({ children }) {
    let locStorage = getLocalStorage();
    const [habitsPercentage, setHabitsPercentage] = useState(0);
    const [userData, setUserData] = useState(locStorage);

    const data = {
        userData,
        setUserData,
        habitsPercentage,
        setHabitsPercentage
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export { Context, AuthProvider }