import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    console.log(user);
    
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logOut = () =>{
        return signOut(auth);
    }
    const signInUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const authInfo = {
        createNewUser,
        user,
        setUser,
        logOut,
        signInUser
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currenUser) => {
            setUser(currenUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
