//! ---------------------------------------- Import
import { useDispatch } from "react-redux";
import { buy } from "/src/features/cart/cartSlice";
//! ---------------------------------------- Component (EnrollCourse)
export default function EnrollCourse({ course = undefined }) {
  //! ---------------------------------------- Hooks
  const dispatch = useDispatch();
  //! ---------------------------------------- Return
  return (
    <div className="bg-blue-50 border border-blue-200 p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-center">
      <div className="flex flex-col gap-1">
        <h4 className="text-xl font-bold text-blue-700">Course price</h4>
        <div className="relative flex gap-2 text-2xl font-semibold xl:min-h-5 w-full">
          {course ? (
            <>
              <p>{`${course?.price?.toLocaleString()}`}</p>
              <h3>Toman</h3>
            </>
          ) : (
            <div className="skeleton" />
          )}
        </div>
      </div>
      <button
        onClick={() => course && dispatch(buy(course))}
        className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition cursor-pointer"
      >
        Register for the course
      </button>
    </div>
  );
}
