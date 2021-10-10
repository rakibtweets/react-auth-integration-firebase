import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

//creating context api
export const AuthContext = createContext();

const AuthProvider = (props) => {
  const allContext = useFirebase();
  return (
    <AuthContext.Provider value={allContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
