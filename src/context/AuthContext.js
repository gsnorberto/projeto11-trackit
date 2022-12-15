import { createContext } from "react";
import { useState } from "react";

const Context = createContext();

function AuthProvider({ children }) {
    const [auth, setAuth] = useState(false);

    return(
        <Context.Provider value={{auth, setAuth}}>
            {children}
        </Context.Provider>
    )
}

export { Context, AuthProvider }