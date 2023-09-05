// AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  const loginAuth = () => {
    
    setAuthenticated(true);
    
    
  };

  const logout = () => {
    
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, loginAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
