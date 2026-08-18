//! ---------------------------------------- Import
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
//! ---------------------------------------- Component (ScrollToTop)
const ScrollToTop = () => {
  //! ---------------------------------------- Hooks
  const { pathname } = useLocation();
  //! --------------------
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [pathname]);
  //! ---------------------------------------- Component (ScrollToTop)
  return null;
};
//! ---------------------------------------- Export
export default ScrollToTop;
