import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"

export const AuthProvider = createContext()
 const auth = getAuth(app)

const AuthContext = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    // Create New User

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login Exsisting User
    const loginWithExistingUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Login Or SignUp with Google
    const loginWithGoogle = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // Logout
    const userLogout = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    
    const authInfo = {user, createUser, loginWithExistingUser, loginWithGoogle, userLogout, loading}

    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;