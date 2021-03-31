import React, { useContext, useEffect, useState } from 'react';
import { auth } from './firebase';

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    };

    useEffect(() => {
        // didmount
        const subscribe = auth.onAuthStateChanged(user => { 
            setCurrentUser(user);
            setLoading(false);
        });
        // unmount
        return subscribe; 
    });

    const value = {
        currentUser,
        signup
    };
    
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}