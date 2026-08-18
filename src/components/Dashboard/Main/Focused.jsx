//! ---------------------------------------- Import
import { memo } from "react";
import { Outlet } from "react-router-dom";
//! ---------------------------------------- Component (Focused)
const Focused = () => {
  return (
    <main className="flex-1 p-6">
      {/* Output */}
      <Outlet />
    </main>
  );
};
//! ---------------------------------------- Export
export default memo(Focused);
