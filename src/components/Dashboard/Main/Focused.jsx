//! ---------------------------------------- Import
import { Outlet } from "react-router-dom";
//! ---------------------------------------- Component (Focused)
export default function Focused() {
  return (
    <main className="flex-1 p-6">
      {/* Output */}
      <Outlet />
    </main>
  );
}
