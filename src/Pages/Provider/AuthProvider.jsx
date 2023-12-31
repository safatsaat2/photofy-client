import { createContext, useEffect, useState } from "react";
import app from "../../../firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {


    const googleProvider = new GoogleAuthProvider()

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass);
    }
    const userProfileUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    const signIn=(email, pass)=>{
        return signInWithEmailAndPassword(auth, email, pass)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            
            if (currentUser) {
                // fetch('https://photofy-server.vercel.app/jwt', {
                //     method: "POST",
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(currentUser.email)
                // })
                //     .then(res => res.json())
                //     .then(data => console.log(data))

                axios.post('https://photofy-server.vercel.app/jwt', {email: currentUser?.email})
                .then(data=> {
                    localStorage.setItem("access-token", data.data.token)
                    setLoading(false)
                })
            }
            else{
                setLoading(false)
                localStorage.removeItem("access-token")
            }
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () =>{
        return signOut(auth)
    }


    const authInfo = {
        user,
        loading,
        createUser,
        userProfileUpdate,
        signIn,
        googleSignIn,
        logOut
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;