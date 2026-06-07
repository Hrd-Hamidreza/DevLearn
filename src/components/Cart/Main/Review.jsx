//! ---------------------------------------- Import
import { useContext } from "react";
import { stateContext } from "/src/context/CartProvider";
//! ---------------------------------------- Component (Head)
export default function Review() {
  //! ---------------------------------------- State
  const { state } = useContext(stateContext);
  //! ---------------------------------------- Reducer
  const total = state.courses.reduce(
    (scratch, product) => scratch + product.price * product.quantity,
    0,
  );
  //! ---------------------------------------- Return
  return (
    <div className="bg-white rounded-2xl p-5 shadow-md h-full flex flex-col justify-between items-center">
      <h3 className="flex w-full justify-center text-xl font-semibold border-b pb-4">
        خلاصه سفارش
      </h3>

      <div className="flex w-full justify-between text-gray-600 text-xl">
        <span>تعداد آیتم‌ها:</span>
        <span>
          {state.courses.length !== 0
            ? state.courses.length + " عدد"
            : state.courses.length}
        </span>
      </div>

      <div className="flex w-full justify-between text-gray-600 text-xl">
        <span>هزینه ارسال:</span>
        <span className="text-green-600">رایگان</span>
      </div>

      <div className="flex w-full justify-between text-lg font-bold text-gray-800 border-t pt-4">
        <span>مبلغ قابل پرداخت:</span>
        <span className="flex text-center">{total.toLocaleString()} تومان</span>
      </div>

      <button className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition cursor-pointer">
        نهایی‌سازی خرید
      </button>
    </div>
  );
}
