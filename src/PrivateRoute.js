import React from 'react';
import {UserAuth} from "./context/AuthContext";

export const PrivateRoute = ({children}) => {
  const {currentUser} = UserAuth()

  return children
};

