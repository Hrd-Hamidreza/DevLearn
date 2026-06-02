import React from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Register = () => {
  return (
    <div className="flex items-center justify-center overflow-hidden shadow-2xl my-15">
      <div className="max-w-5xl w-full bg-white rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:flex bg-gradient-to-tr from-blue-500 to-indigo-600 p-10 text-white relative">
          <div>
            <h2 className="text-3xl font-bold leading-tight mb-4">
              به خانواده DevMinds بپیوند!
            </h2>
            <p className="text-sm text-blue-100">
              عضویت رایگانه! فقط چند ثانیه طول می‌کشه تا وارد دنیای یادگیری
              حرفه‌ای بشی.
            </p>
            <img
              src="/images/register-illustration.svg"
              alt="Register Illustration"
              className="absolute bottom-0 left-0 w-60 opacity-30"
            />
          </div>
        </div>

        <div className="p-8 sm:p-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            ساخت حساب کاربری
          </h2>

          <form className="space-y-5">
            <div className="relative">
              <FaUser className="absolute right-4 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="نام کامل"
                className="w-full pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute right-4 top-3 text-gray-400" />
              <input
                type="email"
                placeholder="ایمیل"
                className="w-full pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              />
            </div>

            <div className="relative">
              <FaLock className="absolute right-4 top-3 text-gray-400" />
              <input
                type="password"
                placeholder="رمز عبور"
                className="w-full pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              />
            </div>

            <div className="relative">
              <FaLock className="absolute right-4 top-3 text-gray-400" />
              <input
                type="password"
                placeholder="تایید رمز عبور"
                className="w-full pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold text-sm transition"
            >
              ساخت حساب کاربری
            </button>

            <div className="text-center text-sm text-gray-600">
              حساب داری؟{" "}
              <a href="/login" className="text-indigo-600 hover:underline">
                وارد شو
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
