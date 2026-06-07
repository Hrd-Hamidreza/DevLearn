//! ---------------------------------------- Import
import { Link, NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { stateContext } from "/src/context/CartProvider";
//! ---------------------------------------- Component (Header)
export default function Header() {
  const { state } = useContext(stateContext);
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

      <div className="flex items-center gap-4">
        {/* سبد خرید */}
        <Link to={"cart"} className="relative cursor-pointer">
          <FaCartShopping className="text-2xl" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {state.courses.length}
          </span>
        </Link>

        {/* دکمه‌ها */}
        <Link to={"login"} className="btn-outline-primary cursor-pointer">
          ورود
        </Link>
        <Link to={"register"} className="btn-primary cursor-pointer">
          ثبت‌نام
        </Link>
      </div>
    </header>
  );
}
