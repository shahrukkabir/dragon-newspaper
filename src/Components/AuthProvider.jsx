import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../Firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    
    const createUser = (email, password) => {
       return  createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;