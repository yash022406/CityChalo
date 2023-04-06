import { createContext, useContext, useEffect, useState } from 'react'
import { 
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     signOut 
    } from 'firebase/auth'
import {auth} from '../firebase'
import { GoogleAuthProvider,
         signInWithPopup,
         signInWithRedirect,
         onAuthStateChanged
        } from "firebase/auth";
import userEvent from '@testing-library/user-event'
const UserContext = createContext({})

export const AuthContextProvider = ( {children} ) => {
    const [user,setUser] = useState({})

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider);
    }

    const logout = () => {
        return signOut(auth)    
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
            console.log(currentUser)
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        };
    },[])

    return(
        <UserContext.Provider value = {{createUser ,googleSignIn, user , logout , signIn}} >
        {children}
        </UserContext.Provider>
    )

}
export const UserAuth = () => {
    return useContext(UserContext)
}
