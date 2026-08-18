//! ---------------------------------------- Import
import {
  FaBook,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaBell,
  FaCreditCard,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getMenueItemsDataFn } from "/src/services/menuItemService";
import { logOut } from "/src/features/user/userSlice";
import { useEffect, useState } from "react";
//! ---------------------------------------- Variables
const iconMap = { FaBook, FaUser, FaCog, FaSignOutAlt, FaBell, FaCreditCard };
const skeletonCount = 6;
//! ---------------------------------------- Component (SideBar)
export default function SideBar() {
  //! ---------------------------------------- Query
  const { data: items, isLoading } = useQuery({
    queryKey: ["menu-items"],
    queryFn: getMenueItemsDataFn,
  });
  //! ---------------------------------------- Variables
  const isReload =
    performance.getEntriesByType("navigation")[0]?.type === "reload";

  //! ---------------------------------------- Hooks
  const [entered, setEntered] = useState(true);
  //! --------------------
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //! --------------------
  useEffect(() => {
    if (!entered) return;
    //! -------------------- Timer
    const timer = setTimeout(() => {
      setEntered(false);
    }, 3000);
    //! -------------------- Return
    return () => clearTimeout(timer);
  }, [entered]);
  //! ---------------------------------------- Functions
  const exit = () => {
    dispatch(logOut());
    navigate("login");
  };
  //! ---------------------------------------- Return
  return (
    <aside className="w-64 bg-white border-l border-gray-200 shadow px-4 py-6 hidden md:block">
      <h2 className="text-xl font-bold text-blue-600 mb-8 text-center">
        {entered || !isReload ? (
          <span>
            <h3>به پنل کاربری خود</h3>
            <span>خوش آمدید</span>
          </span>
        ) : (
          "پنل کاربری"
        )}
      </h2>
      <ul className="flex flex-col gap-4 text-gray-700 text-sm">
        {isLoading ? (
          Array.from({ length: skeletonCount }).map((_, index) => (
            <li
              key={index}
              className="relative xl:min-h-9 rounded-lg overflow-hidden"
            >
              <div className="skeleton" />
            </li>
          ))
        ) : (
          <>
            {items?.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className="dashboard flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100"
                >
                  <Icon />
                  <span>{item.title}</span>
                </NavLink>
              );
            })}
            <button
              onClick={exit}
              className="dashboard flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-red-400 w-full"
            >
              <FaSignOutAlt />
              <span>خروج</span>
            </button>
          </>
        )}
      </ul>
    </aside>
  );
}
