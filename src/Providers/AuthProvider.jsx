import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext= createContext(null);

const auth= getAuth(app);
const googleProvider= new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser]= useState({});
    const [loading,setLoading]= useState(true);
    // for registration page
    const register=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    // update profile
    const profileUpdate=(name,photo)=>{
        setLoading(true);
        return updateProfile(auth.currentUser, {displayName:name, photoURL: photo});
    }
    // login
    const logIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    // google login
    const googleLogin=()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    // logout
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }
    // sate change use effect
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, currentUser=>{
            console.log("state user", currentUser);
            setUser(currentUser);
            // axios for get and set jwt token
            if(currentUser){
                axios.post('http://localhost:5000/jwt',{email:currentUser.email})
                .then(data=>{
                    // console.log(data)
                    localStorage.setItem('access-token', data.data.token);
                    setLoading(false);
                })
            }
            else{
                localStorage.removeItem('access-token');
                
            }
            
        //    not sure 
            // setLoading(false);  

        })
        return ()=>{unsubscribe()}
    },[])

    const authInfo={user, loading, register, profileUpdate, logOut,  logIn, googleLogin}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;