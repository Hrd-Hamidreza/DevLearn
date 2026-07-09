//! ---------------------------------------- Import
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
//! ---------------------------------------- Component (Protected Login)
export default function ProtectedEntrance({ children, type }) {
  //! ----------------------------------------
  const { cart, account } = useSelector((store) => store);
  const userInfo = Object.keys(account.user).includes("id");
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
