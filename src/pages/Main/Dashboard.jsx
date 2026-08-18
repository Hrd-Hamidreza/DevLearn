//! ---------------------------------------- Import
import SideBar from "/src/components/Dashboard/Main/SideBar";
import Focused from "/src/components/Dashboard/Main/Focused";
//! ---------------------------------------- Component (Dashboard)
export default function Dashboard() {
  //! ---------------------------------------- Hooks
  //! ---------------------------------------- Return
  return (
    <div className="flex bg-gray-100 w-screen h-screen">
      {/* Sidebar */}
      <SideBar />
      {/* Main Content */}
      <Focused />
    </div>
  );
}
