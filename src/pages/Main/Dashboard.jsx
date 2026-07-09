//! ---------------------------------------- Import
import React from "react";
import SideBar from "/src/components/Dashboard/Main/SideBar";
import Focused from "/src/components/Dashboard/Main/Focused";
//! ---------------------------------------- Component (Dashboard)
const Dashboard = () => {
  //! ----------------------------------------
  //! ---------------------------------------- Return
  return (
    <div className="flex bg-gray-100 w-screen h-screen">
      {/* Sidebar */}
      <SideBar />
      {/* Main Content */}
      <Focused />
    </div>
  );
};

export default Dashboard;
