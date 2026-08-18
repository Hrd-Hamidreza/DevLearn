//! ---------------------------------------- Import
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
//! ---------------------------------------- Component (ProtectedEntrance)
export default function DashboardGaurd({ children }) {
  //! ---------------------------------------- Redux
  const { cart, account } = useSelector((store) => store);
  //! ---------------------------------------- Rest
  const userInfo = Object.keys(account.user).includes("id");
  //! ---------------------------------------- Return
  if (userInfo) {
    return children;
  } else {
    return <Navigate to={`/login`} />;
  }
}
