'use client';

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    User,
    onAuthStateChanged
} from 'firebase/auth';
import { auth } from '@/firebase/firebase';
import { FirebaseError } from 'firebase/app';
import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { setCookie, deleteCookie } from 'cookies-next';

type AuthContextType = {
    signUp: (email: string, password: string) => void;
    signIn: (email: string, password: string) => void;
    signOutCurrentUser: () => void;
    currentUser: User | null;
};

const AuthContext = createContext<AuthContextType | null>(null);

const AuthContextProvider = ({
    children
}: Readonly<{ children: React.ReactNode }>) => {
    const router = useRouter();

    const [currentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const idToken = await user.getIdToken();
                setCookie('__session', idToken);
            } else {
                deleteCookie('__session');
            }
            setCurrentUser(user);
        });
    }, []);

    const signUp = (email: string, password: string): void => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('signed up: ', user);
                router.push('/');
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
                router.push('/');
            })
            .catch((error: FirebaseError) => {
                console.log(error.message);
            });
    };

    const signOutCurrentUser = (): void => {
        signOut(auth)
            .then(() => {
                console.log('user signed out');
                router.push('/');
            })
            .catch((error: FirebaseError) => {
                console.log(error);
            });
    };

    return (
        <AuthContext.Provider
            value={{ signUp, signIn, signOutCurrentUser, currentUser }}
        >
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
