//! ---------------------------------------- Import
import { createContext } from "react";
import UseBase from "../hooks/UseBase";
//! ---------------------------------------- Variables
export const stateContext = createContext();
//! ---------------------------------------- Component (Cart Provider)
export default function CartProvider({ children }) {
  //! ----------------------------------------
  const [state, dispatch] = UseBase();
  //! ----------------------------------------
  return (
    <stateContext.Provider value={{ state, dispatch }}>
      {children}
    </stateContext.Provider>
  );
}
