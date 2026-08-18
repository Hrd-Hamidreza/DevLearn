//! ---------------------------------------- Import
import { memo } from "react";
import { NavLink } from "react-router-dom";
//! ---------------------------------------- Component (NavBar)
const NavBar = () => {
  //! ---------------------------------------- Return
  return (
    <nav className="flex gap-7 md:flex">
      <NavLink to={"/"} className="hover:text-blue-600">
        Home
      </NavLink>
      <NavLink to={"course"} className="hover:text-blue-600">
        Courses
      </NavLink>
      <NavLink to={"article"} className="hover:text-blue-600">
        Articles
      </NavLink>
      <NavLink to={"teacher"} className="hover:text-blue-600">
        Teachers
      </NavLink>
      <NavLink to={"about"} className="hover:text-blue-600">
        About us
      </NavLink>
    </nav>
  );
};
//! ---------------------------------------- Export
export default memo(NavBar);
