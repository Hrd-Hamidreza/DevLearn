//! ---------------------------------------- Import
//! ---------------------------------------- npm install react-hook-form @hookform/resolvers yup
import { FaLock, FaEnvelope, FaUserAlt } from "react-icons/fa";
import { useContext, useState } from "react";
import { userContext } from "/src/context/UserProvider";
import users from "/src/data/users";
import { Link, useNavigate } from "react-router-dom";
//! ---------------------------------------- Component (Dashboard)
export default function Form() {
  //! ---------------------------------------- Context
  const navigate = useNavigate();
  const { userState, dispatch } = useContext(userContext);
  const [checked, setChecked] = useState(true);
  const [valid, setValid] = useState(true);
  //! ---------------------------------------- Function
  const submitHandler = (event) => {
    event.preventDefault();
    const userInfo = users.find(
      (user) =>
        user.email === userState.user.email &&
        user.password === userState.user.password,
    );
    if (userInfo) {
      dispatch({ type: "Login", user: userInfo });
      Boolean(userInfo) && navigate(`/dashboard`);
    }
    setChecked(Boolean(userInfo));
  };
  //! ---------------------------------------- Return
  return (
    <div className="p-8 sm:p-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        ورود به حساب کاربری
      </h2>
      <form
        onSubmit={(event) => submitHandler(event)}
        className="flex flex-col gap-3"
      >
        {/* Email */}
        <div className="flex justify-center items-start flex-col w-full m-0 gap-1.5">
          <span className="relative w-full">
            <FaEnvelope className="svg-primary" />
            <input
              onChange={(event) => {
                dispatch({
                  type: "Info",
                  priority: "Email",
                  email: event.currentTarget.value,
                });
                setValid(event.target.validity.valid);
              }}
              type="email"
              placeholder="ایمیل"
              className="input-primary w-full"
            />
          </span>
          {!valid && (
            <p className="text-red-500 text-sm px-1">
              {`لطفا ایمیل را به صورت صحیح وارد کنید.`}
            </p>
          )}
        </div>
        {/* Password */}
        <div className="relative">
          <span className="relative w-full">
            <FaLock className="svg-primary" />
            <input
              onChange={(event) =>
                dispatch({
                  type: "Info",
                  priority: "Password",
                  password: event.currentTarget.value,
                })
              }
              type="password"
              placeholder="رمز عبور"
              className="input-primary"
            />
          </span>
        </div>
        {!checked && (
          <p className="text-red-500 text-sm px-1">
            {`ایمیل یا پسورد وارد شده صحیح نمی باشد.`}
          </p>
        )}
        {/* Forgot */}
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
          حساب نداری؟
          <Link to={"/register"} className="text-blue-600 hover:underline">
            {` ثبت‌ نام کن`}
          </Link>
        </div>
      </form>
    </div>
  );
}
