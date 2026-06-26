//! ---------------------------------------- Import
import {
  FaBook,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaBell,
  FaCreditCard,
} from "react-icons/fa";
import { Outlet } from "react-router-dom";
//! ---------------------------------------- Component (Dashboard)
export default function Focused() {
  return (
    <main className="flex-1 p-6">
      {/* Output */}
      <Outlet />
    </main>
  );
}
