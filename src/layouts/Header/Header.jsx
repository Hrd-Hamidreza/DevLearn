//! ---------------------------------------- Import
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { cartContext } from "/src/context/CartProvider";
import { userContext } from "/src/context/UserProvider";
import { CiLogout } from "react-icons/ci";
//! ---------------------------------------- Component (Header)
export default function Header() {
  const { cartState } = useContext(cartContext);
  const { userState, dispatch } = useContext(userContext);
  const navigate = useNavigate();
  const exit = (event) => {
    dispatch({ type: "LogOut" });
    navigate("login");
  };
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center h-[4rem] fixed top-0 left-0 right-0 z-100">
      <Link
        to={"/"}
        className="text-2xl font-bold text-blue-600 cursor-pointer"
      >
        DevLearn
      </Link>

      <nav className="flex gap-7 md:flex">
        <NavLink to={"/"} className="hover:text-blue-600">
          خانه
        </NavLink>
        <NavLink to={"course"} className="hover:text-blue-600">
          دوره‌ها
        </NavLink>
        <NavLink to={"article"} className="hover:text-blue-600">
          مقالات
        </NavLink>
        <NavLink to={"teacher"} className="hover:text-blue-600">
          مدرسین
        </NavLink>
        <NavLink to={"about"} className="hover:text-blue-600">
          درباره ما
        </NavLink>
      </nav>

      <div className="flex items-center gap-2">
        {/* سبد خرید */}
        <Link to={"cart"} className="relative cursor-pointer">
          <FaCartShopping className="text-2xl" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cartState.courses.length}
          </span>
        </Link>
        {/* دکمه‌ها */}
        {userState.user.name ? (
          <>
            <Link
              to={`/dashboard`}
              className="btn-outline-primary flex items-center justify-center py-2 gap-3"
            >
              <img
                className="rounded-full flex w-6 h-6 object-contain"
                src={userState.user.avatar}
              />
              <span className="flex">{`${userState.user.name} عزیز خوش آمدید.`}</span>
            </Link>
            <CiLogout
              onClick={(event) => exit(event)}
              title="خروج از حساب کاربری"
              className="w-8 h-8 cursor-pointer text-red-500 p-1"
            />
          </>
        ) : (
          <div className="flex items-center justify-between gap-4">
            <Link to={"login"} className="btn-outline-primary">
              ورود
            </Link>
            <Link to={"register"} className="btn-primary">
              ثبت‌ نام
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
