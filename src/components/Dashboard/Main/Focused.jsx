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
export default function Focused() {
  return (
    <main className="flex-1 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">دوره‌های من</h1>
      {/* Courses */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow hover:shadow-md transition">
          <img
            src="/images/course/React.webp"
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
            src="/images/course/php.webp"
            alt="آموزش Php"
            className="w-full h-40 object-cover rounded-t-xl"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              آموزش Php
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
  );
}
