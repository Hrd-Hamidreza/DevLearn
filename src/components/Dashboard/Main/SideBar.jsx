//! ---------------------------------------- Import
import {
  FaBook,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaBell,
  FaCreditCard,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, NavLink } from "react-router-dom";
import { logOut } from "/src/features/user/userSlice";
//! ---------------------------------------- Component (Dashboard)
export default function SideBar() {
  //! ----------------------------------------
  const dispatch = useDispatch();
  const exit = () => {
    dispatch(logOut());
    <Navigate to={"login"} />;
  };
  //! ---------------------------------------- Return
  return (
    <aside className="w-64 bg-white border-l border-gray-200 shadow px-4 py-6 hidden md:block">
      <h2 className="text-xl font-bold text-blue-600 mb-8 text-center">
        پنل کاربری
      </h2>
      <ul className="space-y-4 text-gray-700 text-sm">
        <NavLink
          to={"profile"}
          className="dashboard flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100"
        >
          <FaUser />
          <span>پروفایل</span>
        </NavLink>
        <NavLink
          to={"courses"}
          className="dashboard flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer font-semibold"
        >
          <FaBook />
          <span>دوره‌های من</span>
        </NavLink>
        <NavLink
          to={"transactions"}
          className="dashboard flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100"
        >
          <FaCreditCard />
          <span>تراکنش‌ها</span>
        </NavLink>
        <NavLink
          to={"notifications"}
          className="dashboard flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100"
        >
          <FaBell />
          <span>اعلان‌ها</span>
        </NavLink>
        <NavLink
          to={"settings"}
          className="dashboard flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100"
        >
          <FaCog />
          <span>تنظیمات</span>
        </NavLink>
        <button
          onClick={() => exit()}
          className="dashboard flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-red-400 w-full"
        >
          <FaSignOutAlt />
          <span>خروج</span>
        </button>
      </ul>
    </aside>
  );
}
