//! ---------------------------------------- Import
import Logo from "/src/components/Header/Logo";
import NavBar from "/src/components/Header/NavBar";
import UserBox from "/src/components/Header/UserBox";
import { memo } from "react";
//! ---------------------------------------- Component (Header)
const Header = () => {
  //! ---------------------------------------- Return
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center h-[4rem] fixed top-0 left-0 right-0 z-100">
      <div className="flex justify-start items-center gap-5 h-full">
        {/* Logo */}
        <Logo />
        {/* Separator */}
        <hr className="w-0.5 bg-blue-500 h-full" />
        {/* NavBar */}
        <NavBar />
      </div>
      {/* UserBox */}
      <UserBox />
    </header>
  );
};
//! ---------------------------------------- Export
export default memo(Header);
