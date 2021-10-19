import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initAuth from "../Firebase/firebase.init";

initAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signUpUsingEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .catch((error) => setErrorMessage(error.message))
            .finally(() => { setLoading(false) });
    }

    const signInUsingEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            .catch((error) => setErrorMessage(error.message))
            .finally(() => { setLoading(false) });
    }

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .finally(() => { setLoading(false) });
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else { }
            setLoading(false);
        });
    }, [])

    return { user, loading, errorMessage, signUpUsingEmail, signInUsingEmail, signInUsingGoogle, logOut }

}

export default useFirebase;