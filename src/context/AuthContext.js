import { createContext } from "react";
import { useState } from "react";

const Context = createContext();

function AuthProvider({ children }) {
    const [auth, setAuth] = useState(false);
    const [userData, setUserData] = useState({});
    const [habitsPercentage, setHabitsPercentage] = useState(0);

    const data = {
        auth,
        setAuth,
        userData,
        setUserData,
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