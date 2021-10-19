import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import initAuth from "../Firebase/firebase.init";

initAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const signUpUsingEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
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

    return { user, loading, signUpUsingEmail, signInUsingGoogle, logOut }

}

export default useFirebase;