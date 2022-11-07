import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.init';
import {getAuth} from "firebase/auth"

export const AuthProvider = createContext()
 const auth = getAuth(app)

const AuthContext = ({ children }) => {
    const [user, setUser] = useState()
    
    const authInfo = {user}

    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;