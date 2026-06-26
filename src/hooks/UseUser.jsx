//! ---------------------------------------- Import
import { useEffect, useReducer } from "react";
import UseLocalStorage from "/src/hooks/UseLocalStorage";
import userReducer, { initialState } from "/src/Reducers/userReducer";
//! ---------------------------------------- Variables
const USER = "User";
//! ---------------------------------------- Function (userReducer)
export default function UseUser() {
  //! ----------------------------------------
  const [setLocalStorage, getLocalStorage] = UseLocalStorage(USER);
  const saved = getLocalStorage();
  const [userState, dispatch] = useReducer(
    userReducer,
    saved?.userState || initialState,
  );
  useEffect(() => {
    setLocalStorage({ userState });
  }, [userState]);
  //! ---------------------------------------- Return
  return [userState, dispatch];
}
