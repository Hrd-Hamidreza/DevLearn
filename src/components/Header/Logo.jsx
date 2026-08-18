//! ---------------------------------------- Import
import { memo } from "react";
import { Link } from "react-router-dom";
//! ---------------------------------------- Component (Logo)
const Logo = () => {
  //! ---------------------------------------- Return
  return (
    <Link
      to={"/"}
      className="text-2xl font-bold text-blue-600 cursor-pointer h-full"
    >
      DevLearn
    </Link>
  );
};
//! ---------------------------------------- Export
export default memo(Logo);
