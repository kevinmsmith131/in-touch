import { createContext, useEffect, useReducer } from 'react';
import UserReducer from './UserReducer';

const INITAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isRetrieving: false,
  error: false
};

export const UserContext = createContext(INITAL_STATE);

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, INITAL_STATE);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  });

  return (
    <UserContext.Provider 
      value={{ 
        user: state.user, 
        isRetrieving: state.isRetrieving, 
        error: state.error,
        dispatch 
      }}
    >
      {children}
    </UserContext.Provider>  
  );
};
