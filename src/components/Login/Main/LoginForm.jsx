//! ---------------------------------------- Import
//! ---------------------------------------- npm install react-hook-form @hookform/resolvers yup
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useMutation, useQuery } from "@tanstack/react-query";
import { userLoginFn } from "/src/services/AuthService";
import { login } from "/src/features/user/userSlice";
import PremiumLoader from "/src/components/Loader/PremiumLoader";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidation } from "/src/validations/loginValidationSchema";
import MyIcons from "/src/components/Icons/MyIcons";
//! ---------------------------------------- Component (Form)
export default function LoginForm() {
  //! ---------------------------------------- Hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidation),
  });
  //! --------------------
  const navigate = useNavigate();
  //! --------------------
  const dispatch = useDispatch();
  //! ---------------------------------------- Query
  const { mutate, isPending, isSuccess, isError, error } = useMutation({
    mutationKey: ["user-login"],
    mutationFn: userLoginFn,
    onSuccess: (data) => {
      dispatch(login(data));
      navigate(`/dashboard`);
    },
  });
  //! ---------------------------------------- Functions
  const onSubmit = (data) => {
    mutate({ data });
  };
  //! ---------------------------------------- Return
  return (
    <div className="p-8 sm:p-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        ورود به حساب کاربری
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        {/* Email */}
        <div className="flex justify-center items-start flex-col w-full m-0 gap-1.5">
          <span className="relative w-full">
            <MyIcons type={"email"} className="svg-primary" />
            <input
              {...register("email")}
              name="email"
              type="email"
              placeholder="ایمیل"
              className="input-primary w-full"
            />
          </span>

          {errors?.email && (
            <p className="text-red-500 text-sm px-1">{errors?.email.message}</p>
          )}
        </div>
        {/* Password */}
        <div className="relative">
          <span className="relative w-full">
            <MyIcons type={"password"} className="svg-primary" />
            <input
              {...register("password")}
              name="password"
              type="password"
              placeholder="رمز عبور"
              className="input-primary"
            />
          </span>

          {errors?.password && (
            <p className="text-red-500 text-sm px-1">
              {errors?.password.message}
            </p>
          )}
        </div>
        {isError && (
          <p className="text-red-500 text-sm px-1 text-center">
            {error.message}
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

        <button
          disabled={isPending}
          type="submit"
          className={`btn-primary w-full py-2 ${isPending ? "cursor-auto" : "cursor-pointer"}`}
        >
          {isPending ? `درحال ارسال اطلاعات...` : `ورود به حساب`}
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
