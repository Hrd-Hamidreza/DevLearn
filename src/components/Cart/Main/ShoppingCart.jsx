//! ---------------------------------------- Import
import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { cartContext } from "/src/context/CartProvider";
//! ---------------------------------------- Component (ShoppingCart)
export default function ShoppingCart() {
  //! ---------------------------------------- cartState
  const { cartState, dispatch } = useContext(cartContext);
  //! ---------------------------------------- Return
  return (
    <div className="lg:col-span-2 bg-white rounded-2xl p-5 shadow-md overflow-auto">
      {cartState.courses.length === 0 ? (
        <div className="flex justify-center items-center w-full h-full">
          هیچ آیتمی در سبد خرید شما وجود ندارد
        </div>
      ) : (
        <div className="space-y-4">
          {cartState.courses.map((course, idx) => (
            <div
              key={course.id}
              className={`flex items-center justify-between ${idx !== cartState.courses.length - 1 ? "border-b" : ""}  pb-4`}
            >
              <div className="flex items-center gap-4">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-20 h-20 rounded-xl object-cover"
                />
                <div>
                  <h2 className="font-semibold">{course.title}</h2>
                  <p className="text-gray-500">
                    قیمت واحد: {course.price.toLocaleString()} تومان
                  </p>
                  <div className="flex justify-start items-center gap-1">
                    <button
                      onClick={() =>
                        dispatch({
                          type: "Quantity",
                          priority: "Plus",
                          course: course,
                        })
                      }
                      className="bg-green-500 text-white rounded-xl w-8 h-7 text-xl cursor-pointer"
                    >
                      +
                    </button>
                    <span className="mt-1 text-gray-600 text-xl w-6 flex text-center justify-center items-center">
                      {course.quantity}
                    </span>
                    <button
                      onClick={() =>
                        dispatch({
                          type: "Quantity",
                          priority: "Minus",
                          course: course,
                        })
                      }
                      className="bg-red-500 text-white rounded-xl w-8 h-7 text-xl cursor-pointer"
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-emerald-600">
                  {(course.quantity * course.price).toLocaleString()} تومان
                </p>
                <button
                  onClick={() => dispatch({ type: "Delete", course: course })}
                  className="cursor-pointer flex rounded items-center justify-center gap-2 text-white px-4 mt-3 py-2 text-sm bg-red-500 hover:text-gray-700 transition"
                >
                  <FaTrash className="w-3 h-3" />
                  <span>حذف از سبد خرید</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
