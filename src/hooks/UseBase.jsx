//! ---------------------------------------- Import
import { useEffect, useReducer } from "react";
import UseLocalStorage from "/src/hooks/UseLocalStorage";
import { cartReducer, initialState } from "/src/Reducers/cartReducer";
//! ---------------------------------------- Component (Use Base)
export default function UseBase() {
  //! ---------------------------------------- Use
  const [setLocalStorage, getLocalStorage] = UseLocalStorage();
  const saved = getLocalStorage();
  const [state, dispatch] = useReducer(
    cartReducer,
    saved?.state || initialState,
  );
  useEffect(() => {
    setLocalStorage({ state });
  }, [state]);
  //! ---------------------------------------- Return
  return [state, dispatch];
}
