//! ---------------------------------------- Import
import { FaTrash } from "react-icons/fa";
//! ---------------------------------------- Component (ShoppingCart)
export default function ShoppingCart() {
  return (
    <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-md">
      <div className="space-y-4">
        {/* آیتم ۱ */}
        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center gap-4">
            <img
              src="https://via.placeholder.com/100"
              alt="دوره حرفه‌ای ری‌اکت"
              className="w-20 h-20 rounded-xl object-cover"
            />
            <div>
              <h2 className="font-semibold">دوره حرفه‌ای ری‌اکت</h2>
              <p className="text-gray-500">قیمت واحد: 1,200,000 تومان</p>
              <p className="text-sm mt-1 text-gray-600">تعداد: 1</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-emerald-600">
              1,200,000 تومان
            </p>
            <button className="cursor-pointer flex rounded items-center justify-center gap-2 text-white px-4 mt-3 py-2 text-sm bg-red-500 hover:text-gray-700 transition">
              <FaTrash className="w-3 h-3" />
              <span>حذف از سبد خرید</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
