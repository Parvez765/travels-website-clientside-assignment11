import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth"

export const AuthProvider = createContext()
 const auth = getAuth(app)

const AuthContext = ({ children }) => {
    const [user, setUser] = useState()

    // Create New User

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const authInfo = {user, createUser}

    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;