import React, { createContext, useContext, useState } from 'react';

// Create a User Context
const UserContext = createContext();

// Custom Provider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Manage user state

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to use the User Context
export const useUser = () => {
    return useContext(UserContext);
};
