import React from "react";
import {
  FaBook,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaBell,
  FaCreditCard,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex bg-gray-100">
      {/* Sidebar */}
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

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">دوره‌های من</h1>

        {/* Courses */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow hover:shadow-md transition">
            <img
              src="/images/course/React.png"
              alt="آموزش جامع React"
              className="w-full h-40 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                آموزش جامع React
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
              <p className="text-sm text-gray-500">پیشرفت: 60%</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-md transition">
            <img
              src="/images/course/React.png"
              alt="آموزش TailwindCSS"
              className="w-full h-40 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                آموزش TailwindCSS
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
              <p className="text-sm text-gray-500">پیشرفت: 100%</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
