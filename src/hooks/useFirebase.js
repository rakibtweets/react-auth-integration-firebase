import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';

// import fireabase authentication function
initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        //log out successfully
        setUser({});
      })
      .catch((error) => {
        // An error happened.
        setError(error.message);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('inside state change', user);
        setUser(user);
      }
    });
  }, []);
  return {
    user,
    error,
    signInWithGoogle,
    logOut,
  };
};
export default useFirebase;
