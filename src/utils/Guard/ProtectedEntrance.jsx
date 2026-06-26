//! ---------------------------------------- Import
import { useContext } from "react";
import { userContext } from "/src/context/UserProvider";
import { Navigate } from "react-router-dom";
//! ---------------------------------------- Component (Protected Login)
export default function ProtectedEntrance({ children, type }) {
  //! ----------------------------------------
  const { userState } = useContext(userContext);
  const userInfo = Object.keys(userState.user).includes("id");
  if (userInfo) {
    return type === "login" || type === "register" ? (
      <Navigate to={"/dashboard"} />
    ) : (
      children
    );
  } else {
    return type === "dashboard" ? <Navigate to={"/login"} /> : children;
  }
}
