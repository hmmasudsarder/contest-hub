import { createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState()
  const googleProvider = new GoogleAuthProvider();

  // create user email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sign in email and pasword
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (name, photo) => {
        
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      })
}
  // sign in with google Account
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };


  const logOut = () => {
    setLoading(true);
    return signOut(auth)
}


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        // if(currentUser){
        //     const userHistory = {email: currentUser.email};
        //     axiosPublic.post('/jwt', userHistory)
        //     .then(res =>{
                // if(res.data.token){
                //     localStorage.setItem('access-token', res.data.token)
                // }
            // })
        // }
        // else{
        //     localStorage.removeItem('access-token')
        // }
        setLoading(false)
    });
    return () => {
        unsubscribe()
    }
}, []);


  const authInfo = {
    user,
    loading,
    createUser,
    updateUserProfile,
    signIn,
    logOut,
    googleSignIn
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
