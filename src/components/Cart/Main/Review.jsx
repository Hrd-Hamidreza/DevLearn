//! ---------------------------------------- Import
//! ---------------------------------------- Component (Head)
export default function Review() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md h-fit">
      <h3 className="text-xl font-semibold mb-4 border-b pb-2">خلاصه سفارش</h3>

      <div className="flex justify-between py-2 text-gray-600">
        <span>تعداد آیتم‌ها:</span>
        <span>2</span>
      </div>

      <div className="flex justify-between py-2 text-gray-600">
        <span>هزینه ارسال:</span>
        <span className="text-green-600">رایگان</span>
      </div>

      <div className="flex justify-between py-2 text-lg font-bold text-gray-800 border-t mt-4 pt-4">
        <span>مبلغ قابل پرداخت:</span>
        <span>2,900,000 تومان</span>
      </div>

      <button className="mt-6 w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition">
        نهایی‌سازی خرید
      </button>
    </div>
  );
}
