//! ---------------------------------------- Import
import { Outlet, useParams } from "react-router-dom";
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";
//! ---------------------------------------- Component (Main)
export default function Main() {
  return (
    <div className="my-[4rem]">
      <Header />
      <main className="main flex flex-col items-center justify-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
