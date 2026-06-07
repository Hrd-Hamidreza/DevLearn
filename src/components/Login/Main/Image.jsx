//! ---------------------------------------- Import
import { FaLock, FaEnvelope, FaUserAlt } from "react-icons/fa";
//! ---------------------------------------- Component (Image)
export default function Image() {
  return (
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
  );
}
