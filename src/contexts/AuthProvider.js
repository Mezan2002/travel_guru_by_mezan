import React, { createContext, useEffect, useState } from "react";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import { current } from "daisyui/src/colors";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const [user, setUser] = useState({});

  const signInWithGoogleAccount = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signInWithFacebookAccount = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

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
    logOut,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
