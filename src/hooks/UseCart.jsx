//! ---------------------------------------- Import
import { useEffect, useReducer } from "react";
import UseLocalStorage from "/src/hooks/UseLocalStorage";
import { cartReducer, initialState } from "/src/Reducers/cartReducer";
//! ---------------------------------------- Variables
const CART = "Cart";
//! ---------------------------------------- Component (Use Base)
export default function UseCart() {
  //! ---------------------------------------- Use
  const [setLocalStorage, getLocalStorage] = UseLocalStorage(CART);
  const saved = getLocalStorage();
  const [cartState, dispatch] = useReducer(
    cartReducer,
    saved?.cartState || initialState,
  );
  useEffect(() => {
    setLocalStorage({ cartState });
  }, [cartState]);
  //! ---------------------------------------- Return
  return [cartState, dispatch];
}
