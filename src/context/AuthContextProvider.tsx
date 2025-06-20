'use client';

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import { auth } from '@/firebase/firebase';
import { FirebaseError } from 'firebase/app';
import { createContext, useContext } from 'react';

type AuthContextType = {
    signUp: (email: string, password: string) => void;
    signIn: (email: string, password: string) => void;
    signOutCurrentUser: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

const AuthContextProvider = ({
    children
}: Readonly<{ children: React.ReactNode }>) => {
    const signUp = (email: string, password: string): void => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('signed up: ', user);
            })
            .catch((error: FirebaseError) => {
                console.log(error.message);
            });
    };

    const signIn = (email: string, password: string): void => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('user signed in: ', user);
                console.log('server?');
            })
            .catch((error: FirebaseError) => {
                console.log(error.message);
            });
    };

    const signOutCurrentUser = (): void => {
        signOut(auth)
            .then(() => {
                console.log('user signed out');
            })
            .catch((error: FirebaseError) => {
                console.log(error);
            });
    };

    return (
        <AuthContext.Provider value={{ signUp, signIn, signOutCurrentUser }}>
            {children}
        </AuthContext.Provider>
    );
};

const UserAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('UserAuth must be used within an AuthContextProvider');
    }
    return context;
};

export { AuthContextProvider, UserAuth };
