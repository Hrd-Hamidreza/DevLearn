//! ---------------------------------------- Import
import React from "react";
import { FaLock, FaEnvelope, FaUserAlt } from "react-icons/fa";
//! ---------------------------------------- Component (Head)
const Login = () => {
  return (
    <div className="flex items-center justify-center overflow-hidden shadow-2xl my-15">
      <div className="max-w-5xl w-full bg-white rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div className="hidden md:block bg-blue-600 p-10 text-white relative">
          <h2 className="text-3xl font-bold leading-tight mb-4">
            خوش اومدی به DevMinds!
          </h2>
          <p className="text-sm text-blue-100 leading-relaxed">
            برای دسترسی به پنل کاربری، لطفاً وارد حساب خودت شو. اگه حساب نداری
            می‌تونی به راحتی ثبت‌نام کنی.
          </p>
          <img
            src="/images/login-illustration.svg"
            alt="Login Illustration"
            className="absolute bottom-0 left-0 w-60 opacity-30"
          />
        </div>

        {/* Form */}
        <div className="p-8 sm:p-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            ورود به حساب کاربری
          </h2>

          <form className="space-y-5">
            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute right-4 top-3 text-gray-400" />
              <input
                type="email"
                placeholder="ایمیل"
                className="w-full pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <FaLock className="absolute right-4 top-3 text-gray-400" />
              <input
                type="password"
                placeholder="رمز عبور"
                className="w-full pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>

            <div className="flex justify-between text-sm text-gray-500">
              <label className="flex items-center gap-1">
                <input type="checkbox" className="accent-blue-600" />
                مرا به خاطر بسپار
              </label>
              <a href="#" className="hover:text-blue-600">
                فراموشی رمز؟
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-sm transition"
            >
              ورود به حساب
            </button>

            <div className="text-center text-sm text-gray-600">
              حساب نداری؟{" "}
              <a href="#" className="text-blue-600 hover:underline">
                ثبت‌نام کن
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
