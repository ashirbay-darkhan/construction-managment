import {createContext, useContext, useEffect, useState} from "react";
import {GoogleAuthProvider, signInWithRedirect, onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../config/firestore";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null)

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  }

  const logout = () => signOut(auth)

  const value = {
    currentUser,
    setCurrentUser,
    signInWithGoogle,
    logout
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })

    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext)
}
