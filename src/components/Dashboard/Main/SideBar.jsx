//! ---------------------------------------- Import
import {
  FaBook,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaBell,
  FaCreditCard,
} from "react-icons/fa";
//! ---------------------------------------- Component (Dashboard)
export default function SideBar() {
  return (
    <aside className="w-64 bg-white border-l border-gray-200 shadow px-4 py-6 hidden md:block">
      <h2 className="text-xl font-bold text-blue-600 mb-8 text-center">
        پنل کاربری
      </h2>
      <ul className="space-y-4 text-gray-700 text-sm">
        <li className="flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer bg-blue-100 text-blue-700 font-semibold">
          <FaBook />
          <span>دوره‌های من</span>
        </li>
        <li className="flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100">
          <FaUser />
          <span>پروفایل</span>
        </li>
        <li className="flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100">
          <FaCog />
          <span>تنظیمات</span>
        </li>
        <li className="flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100">
          <FaCreditCard />
          <span>تراکنش‌ها</span>
        </li>
        <li className="flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100">
          <FaBell />
          <span>اعلان‌ها</span>
        </li>
        <li className="flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100">
          <FaSignOutAlt />
          <span>خروج</span>
        </li>
      </ul>
    </aside>
  );
}
