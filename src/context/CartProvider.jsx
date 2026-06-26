//! ---------------------------------------- Import
import { createContext } from "react";
import UseCart from "../hooks/UseCart";
//! ---------------------------------------- Variables
export const cartContext = createContext();
//! ---------------------------------------- Component (Cart Provider)
export default function CartProvider({ children }) {
  //! ----------------------------------------
  const [cartState, dispatch] = UseCart();
  //! ----------------------------------------
  return (
    <cartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </cartContext.Provider>
  );
}
