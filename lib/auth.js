import Cookies from 'js-cookie';
import React, { useState, useEffect, useContext, createContext } from 'react';
import { useRouter } from 'next/router';
import { createUser } from './db';
import firebase from './firebase';

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  const handleUser = (rawUser) => {
    if (rawUser) {
      const user = formatUser(rawUser);
      const { token, ...userWithoutToken } = user;

      createUser(user.uid, userWithoutToken);
      setUser(user);

      Cookies.set('bibleverses-auth', true, {
        expires: 1
      });

      return user;
    } else {
      setUser(false);
      Cookies.remove('bibleverses-auth');

      return false;
    }
  };

  const signinWithGoogle = () => {
    router.push('/sites');

    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => handleUser(response.user));
  };

  const signinWithFacebook = () => {
    router.push('/sites');

    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((response) => handleUser(response.user));
  };

  const signinWithTwitter = () => {
    router.push('/sites');

    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.TwitterAuthProvider())
      .then((response) => handleUser(response.user));
  };

  const signout = () => {
    router.push('/');

    return firebase
      .auth()
      .signOut()
      .then(() => handleUser(false));
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged(handleUser);

    return () => unsubscribe();
  }, []);

  return {
    user,
    signinWithGoogle,
    signinWithFacebook,
    signinWithTwitter,
    signout
  };
}

const formatUser = (user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    token: user.Aa,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL
  };
};
