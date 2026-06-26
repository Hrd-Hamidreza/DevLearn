//! ---------------------------------------- Import
import { Outlet } from "react-router-dom";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
//! ---------------------------------------- Variables
//! ---------------------------------------- Functions
//! ---------------------------------------- Component (MainPeak)
export default function MainPeak() {
  //! ----------------------------------------
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
}
