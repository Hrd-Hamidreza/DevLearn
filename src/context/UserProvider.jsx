//! ---------------------------------------- Import
import UseUser from "/src/hooks/UseUser";
import { createContext } from "react";
//! ---------------------------------------- Variables
export const userContext = createContext();
//! ---------------------------------------- Component (User Provider)
export default function UserProvider({ children }) {
  //! ---------------------------------------- Hook
  const [userState, dispatch] = UseUser();
  //! ---------------------------------------- Return
  return (
    <userContext.Provider value={{ userState, dispatch }}>
      {children}
    </userContext.Provider>
  );
}
