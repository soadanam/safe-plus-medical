import firebaseInitializer from './../firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';

firebaseInitializer();

const provider = new GoogleAuthProvider();




const useFirebase = () => {
    
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    ////google sign-in!
    const googleLogin = () => {
        const auth = getAuth();
        return signInWithPopup(auth, provider)
            /* .then((result) => {
                const myUser = result.user;
                setUser(myUser)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);

            }) */
    };



    //// SignOut for all!
    const signOutAuth = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser('')
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
        })
    };



    //Mr. Observer!
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user?.email) {
                setUser(user)
            }
            else {
                setUser('')
            };
            setIsLoading(false)
        });

    }, []);




    return {
        user,
        googleLogin,
        error,
        isLoading,
        signOutAuth
    }


};

export default useFirebase;