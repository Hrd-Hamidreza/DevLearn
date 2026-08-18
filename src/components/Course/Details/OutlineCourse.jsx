//! ---------------------------------------- Import
//! ---------------------------------------- variabels
const skeletonCount = 6;
//! ---------------------------------------- Component (OutlineCourse)
export default function OutlineCourse({ course = undefined }) {
  //! ---------------------------------------- Return
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-2xl font-bold text-blue-600">Course headings</h3>
      <ul className="space-y-2 list-decimal list-inside text-gray-700">
        {course
          ? course?.outline?.map((step, idx) => (
              <li
                key={idx}
                className="bg-white p-2 px-4 rounded-lg shadow-sm border"
              >
                {step}
              </li>
            ))
          : Array.from({ length: skeletonCount }).map((_, index) => (
              <li
                key={index}
                className="relative xl:min-h-15 w-full rounded-lg overflow-hidden"
              >
                <div className="skeleton" />
              </li>
            ))}
      </ul>
    </div>
  );
}
