import { createContext, useState } from "react";

export const loginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  return (
    <loginContext.Provider value={{ login, setLogin }}>
      {children}
    </loginContext.Provider>
  );
};
