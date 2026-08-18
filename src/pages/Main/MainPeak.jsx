//! ---------------------------------------- Import
import { Outlet } from "react-router-dom";
import Header from "/src/layouts/Header/Header";
import Footer from "/src/layouts/Footer/Footer";
import { memo } from "react";
import ScrollToTop from "/src/components/ScrollToTop/ScrollToTop";
//! ---------------------------------------- Component (MainPeak)
const MainPeak = () => {
  //! ---------------------------------------- Return
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="main flex flex-col items-center justify-center">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
//! ---------------------------------------- Export
export default memo(MainPeak);
