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
      {/* Logo */}
      <Logo />
      <div className="flex justify-between items-center w-5/8">
        {/* NavBar */}
        <NavBar />
        {/* UserBox */}
        <UserBox />
      </div>
    </header>
  );
};
//! ---------------------------------------- Export
export default memo(Header);
