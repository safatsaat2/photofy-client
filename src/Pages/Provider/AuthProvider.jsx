import { createContext, useState } from "react";
import app from "../../../firebase.config";
import {createUserWithEmailAndPassword, getAuth, updateCurrentUser}  from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app)
// const [user, setUser] = useState(null);
// const [loading, setLoading] = useState(true);

const createUser = (email, pass) =>{
    return createUserWithEmailAndPassword(auth, email, pass);
}
const updateProfile = ( name, photo) =>{
    return updateCurrentUser(auth.currentUser,{
        displayName: name, photoURL: photo
    }
        
    )
}




const authInfo = {
    // user,
    // loading,
    createUser,
    updateProfile
}
const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;