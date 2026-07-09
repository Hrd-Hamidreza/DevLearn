//! ---------------------------------------- Import
//! ---------------------------------------- npm install react-hook-form @hookform/resolvers yup
import { FaLock, FaEnvelope, FaUserAlt } from "react-icons/fa";
import { useState } from "react";
import users from "/src/data/users";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { info, logIn } from "/src/features/user/userSlice";
//! ---------------------------------------- Component (Dashboard)
export default function Form() {
  //! ----------------------------------------
  const navigate = useNavigate();
  //! ----------------------------------------
  const { cart, account } = useSelector((store) => store);
  const dispatch = useDispatch();
  //! ----------------------------------------
  const [checked, setChecked] = useState(true);
  const [valid, setValid] = useState(true);
  //! ----------------------------------------
  const submitHandler = (event) => {
    event.preventDefault();
    const userInfo = users.find(
      (user) =>
        user.email === account.user.email &&
        user.password === account.user.password,
    );
    if (userInfo) {
      dispatch(logIn(userInfo));
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
                dispatch(
                  info({ priority: "Email", email: event.currentTarget.value }),
                );
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
                dispatch(
                  info({
                    priority: "Password",
                    password: event.currentTarget.value,
                  }),
                )
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
          <Link className="hover:text-blue-600">فراموشی رمز؟</Link>
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
