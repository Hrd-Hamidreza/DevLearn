//! ---------------------------------------- Import
import { useSelector } from "react-redux";
import { useMemo } from "react";
//! ---------------------------------------- Component (Review)
export default function Review() {
  //! ---------------------------------------- Redux
  const { cart } = useSelector((store) => store);
  //! ---------------------------------------- Hooks
  const total = useMemo(() => {
    return cart?.courses?.reduce(
      (scratch, product) => scratch + product.price * product.quantity,
      0,
    );
  }, [cart?.courses]);
  //! ---------------------------------------- Return
  return (
    <div className="bg-white rounded-2xl p-5 shadow-md h-full flex flex-col justify-between items-center">
      <h3 className="flex w-full justify-center text-xl font-semibold border-b pb-4">
        Order Summary
      </h3>

      <div className="flex w-full justify-between text-gray-600 text-xl">
        <span>Number of items:</span>
        <span>
          {cart?.courses?.length !== 0
            ? cart?.courses?.length + " piece"
            : cart?.courses?.length}
        </span>
      </div>

      <div className="flex w-full justify-between text-gray-600 text-xl">
        <span>Shipping cost:</span>
        <span className="text-green-600">Free</span>
      </div>

      <div className="flex w-full justify-between text-lg font-bold text-gray-800 border-t pt-4">
        <span>Amount payable:</span>
        <span className="flex text-center">{total.toLocaleString()} Toman</span>
      </div>

      <button className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition cursor-pointer">
        Finalizing the purchase
      </button>
    </div>
  );
}
