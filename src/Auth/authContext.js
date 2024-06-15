import React, { createContext, useContext, useState } from "react";


const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext); //consumer state management



export const AuthProvider = ({ children }) => {
    //global state
    const [user, setUser] = useState(null);
    //global state
    console.log('user', user);

    //global functions
    const login = (userData) => setUser(userData);
    const logout = () => {
        setUser(null);
        sessionStorage.clear();
    };
    //global functions



    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// export default {
//     AuthProvider,
//     useAuth
    
// }