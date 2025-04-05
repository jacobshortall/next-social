import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import { auth } from './firebase';
import { FirebaseError } from 'firebase/app';

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

export { signUp, signIn, signOutCurrentUser };
