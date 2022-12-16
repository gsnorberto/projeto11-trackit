import { createContext } from "react";
import { useState } from "react";

const Context = createContext();

function AuthProvider({ children }) {
    const [auth, setAuth] = useState(false);
    const [userData, setUserData] = useState({});

    return(
        <Context.Provider value={{auth, setAuth, userData, setUserData}}>
            {children}
        </Context.Provider>
    )
}

export { Context, AuthProvider }