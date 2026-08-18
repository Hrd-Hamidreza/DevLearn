//! ---------------------------------------- Import
import { Outlet } from "react-router-dom";
import Header from "/src/layouts/Header/Header";
import Footer from "/src/layouts/Footer/Footer";
import { memo } from "react";
//! ---------------------------------------- Component (MainPeak)
const MainPeak = () => {
  //! ---------------------------------------- Return
  return (
    <div>
      <Header />
      <main className="main flex flex-col items-center justify-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
//! ---------------------------------------- Export
export default memo(MainPeak);
