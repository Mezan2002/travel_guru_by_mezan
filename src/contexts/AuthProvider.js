import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const [user, setUser] = useState({});

  // sign in with google
  const signInWithGoogleAccount = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // sign in with facebook
  const signInWithFacebookAccount = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  // create new user by email and password
  const newUserSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // logOut
  const logOut = () => {
    return signOut(auth);
  };

  // set current user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user after auth change", currentUser);
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    signInWithGoogleAccount,
    signInWithFacebookAccount,
    newUserSignUp,
    logOut,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
