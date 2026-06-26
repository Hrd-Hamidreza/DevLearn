//! ---------------------------------------- Import
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useContext } from "react";
import { userContext } from "/src/context/UserProvider";
import { Link } from "react-router-dom";
//! ---------------------------------------- Component (Form)
export default function Form() {
  const { userState, dispatch } = useContext(userContext);
  return (
    <div className="p-8 sm:p-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        ساخت حساب کاربری
      </h2>

      <form className="space-y-5">
        <div className="relative">
          <FaUser className="svg-primary" />
          <input type="text" placeholder="نام کامل" className="input-primary" />
        </div>

        <div className="relative">
          <FaEnvelope className="svg-primary" />
          <input type="email" placeholder="ایمیل" className="input-primary" />
        </div>

        <div className="relative">
          <FaLock className="svg-primary" />
          <input
            type="password"
            placeholder="رمز عبور"
            className="input-primary"
          />
        </div>

        <div className="relative">
          <FaLock className="svg-primary" />
          <input
            type="password"
            placeholder="تایید رمز عبور"
            className="input-primary"
          />
        </div>

        <button type="submit" className="btn-primary w-full py-2">
          ساخت حساب کاربری
        </button>

        <div className="text-center text-sm text-gray-600">
          حساب داری؟
          <Link to={"/login"} className="text-indigo-600 hover:underline">
            وارد شو
          </Link>
        </div>
      </form>
    </div>
  );
}
