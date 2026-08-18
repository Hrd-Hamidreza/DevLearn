//! ---------------------------------------- Import
import { yupResolver } from "@hookform/resolvers/yup";
import { set, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { userRegisterFn } from "/src/services/AuthService";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "/src/features/user/userSlice";
import { registerValidation } from "/src/validations/registerValidationSchema";
import MyIcons from "/src/components/Icons/MyIcons";
//! ---------------------------------------- Component (RegisterForm)
export default function RegisterForm() {
  //! ---------------------------------------- Hooks
  const [counter, setCounter] = useState(3);
  //! --------------------
  const dispatch = useDispatch();
  //! --------------------
  const navigate = useNavigate();
  //! --------------------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidation),
  });
  //! ---------------------------------------- Query
  const { data, mutate, isSuccess, isPending, isError, error } = useMutation({
    mutationKey: ["user-register"],
    mutationFn: userRegisterFn,
  });
  //! ---------------------------------------- Functions
  const onSubmit = (data) => {
    mutate({ data });
  };
  //! ---------------------------------------- useEffect
  useEffect(() => {
    if (!isSuccess) return;
    //! -------------------- Rest
    if (counter === 0) {
      dispatch(login(data));
      navigate(`/dashboard`);
    }
    //! -------------------- timer
    const intTimer = setInterval(() => {
      if (counter > 0) {
        setCounter((pre) => pre - 1);
      }
    }, 1000);
    //! -------------------- Return
    return () => clearInterval(intTimer);
  }, [isSuccess, counter, data, dispatch, navigate]);
  //! ---------------------------------------- Return
  return (
    <div className="p-8 sm:p-12">
      {/* Sign Up Title  ساخت حساب کاربری */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        ساخت حساب کاربری
      </h2>
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <div className="relative">
          <MyIcons type={"user"} className="svg-primary" />
          <input
            {...register("name")}
            name="name"
            type="text"
            placeholder="نام کامل"
            className="input-primary"
          />
        </div>

        {errors?.name && (
          <p className="text-red-500 text-sm px-1">{errors?.name?.message}</p>
        )}

        <div className="relative">
          <MyIcons type={"email"} className="svg-primary" />
          <input
            {...register("email")}
            name="email"
            type="email"
            placeholder="ایمیل"
            className="input-primary"
          />
        </div>

        {errors?.email && (
          <p className="text-red-500 text-sm px-1">{errors?.email?.message}</p>
        )}

        <div className="relative">
          <MyIcons type={"password"} className="svg-primary" />
          <input
            {...register("password")}
            name="password"
            type="password"
            placeholder="رمز عبور"
            className="input-primary"
          />
        </div>

        {errors?.password && (
          <p className="text-red-500 text-sm px-1">
            {errors?.password?.message}
          </p>
        )}

        <div className="relative">
          <MyIcons type={"password"} className="svg-primary" />
          <input
            {...register("rePassword")}
            name="rePassword"
            type="password"
            placeholder="تایید رمز عبور"
            className="input-primary"
          />
        </div>

        {errors?.rePassword && (
          <p className="text-red-500 text-sm px-1">
            {errors?.rePassword?.message}
          </p>
        )}

        {isError && (
          <p className="text-red-500 text-sm text-center px-1">
            {error?.message}
          </p>
        )}

        {/* Sign Up */}
        <button
          disabled={isPending || isSuccess}
          type="submit"
          className={`btn-primary w-full py-2 ${isSuccess ? "text-green-500 cursor-auto bg-blue-800 hover:bg-blue-800" : "text-white"}`}
        >
          {isPending
            ? "در حال ساخت..."
            : isSuccess
              ? `در حال انتقال به داشبورد ${counter}`
              : "ساخت حساب کاربری"}
        </button>
        {/* Login */}
        <div className="text-center text-sm text-gray-600">
          حساب داری؟
          <Link to={"/login"} className="text-indigo-600 hover:underline">
            {` وارد شو`}
          </Link>
        </div>
      </form>
    </div>
  );
}
