//! ---------------------------------------- Import
import React from "react";
import ShoppingCart from "/src/components/Cart/Main/ShoppingCart";
import Review from "/src/components/Cart/Main/Review";
//! ---------------------------------------- Component (Cart)
const Cart = () => {
  return (
    <div className="min-h-fit bg-gray-200 rounded-3xl flex-grow w-6xl flex flex-col mx-auto text-gray-800 p-5 my-15">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">🛒 سبد خرید شما</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-100">
        {/* سبد خرید */}
        <ShoppingCart />
        {/* خلاصه سفارش */}
        <Review />
      </div>
    </div>
  );
};

export default Cart;
