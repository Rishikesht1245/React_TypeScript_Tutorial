import { useState, createContext } from "react";
import User from "./User";
export type AuthUser = {
  name: string;
  email: string;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

// creating the context
export const UserContext = createContext({} as UserContextType);

// creating the context provider
export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    // value will be available in useContext hook
    //passing the required props to all children and it will be available once we wrap the app component with the provider
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
