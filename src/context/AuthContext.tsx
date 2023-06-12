import React, { useState } from 'react';

export const AuthContext = React.createContext({});

interface IUser {
  username: string | null;
}

export function AuthProvider(props: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUser>({ username: localStorage.getItem('username') });

  const authContextValue = {
    user,
    signOut: () => {
      localStorage.removeItem('username');
      localStorage.removeItem('access-token');
      setUser({ username: null });
    },
    signIn: (username: string) => setUser({ username }),
  };

  return <AuthContext.Provider value={authContextValue}>{props.children}</AuthContext.Provider>;
}

interface AuthContextType {
  user: IUser;
  signOut: () => void;
  signIn: (username: string) => void;
}

export const useAuth = () => React.useContext(AuthContext) as AuthContextType;
