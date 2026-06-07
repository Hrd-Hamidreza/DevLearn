//! ---------------------------------------- Import
import { FaLock, FaEnvelope, FaUserAlt } from "react-icons/fa";
//! ---------------------------------------- Component (Dashboard)
export default function Form() {
  return (
    <div className="p-8 sm:p-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        ورود به حساب کاربری
      </h2>
      <form className="space-y-5">
        {/* Email */}
        <div className="relative">
          <FaEnvelope className="svg-primary" />
          <input type="email" placeholder="ایمیل" className="input-primary" />
        </div>

        {/* Password */}
        <div className="relative">
          <FaLock className="svg-primary" />
          <input
            type="password"
            placeholder="رمز عبور"
            className="input-primary"
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

        <button type="submit" className="btn-primary w-full py-2">
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
  );
}
