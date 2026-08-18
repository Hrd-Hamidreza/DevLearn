//! ---------------------------------------- Import
import { memo } from "react";
import { NavLink } from "react-router-dom";
//! ---------------------------------------- Component (NavBar)
const NavBar = () => {
  //! ---------------------------------------- Return
  return (
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
  );
};
//! ---------------------------------------- Export
export default memo(NavBar);
