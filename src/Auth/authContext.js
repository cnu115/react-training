import React, { createContext, useContext, useState } from "react";


const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext); //consumer state management



export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    console.log('user', user);

    const login = (userData) => setUser(userData);
    const logout = () => {
        setUser(null);
        sessionStorage.clear();
    };

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