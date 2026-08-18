//! ---------------------------------------- Import
//! ---------------------------------------- Variables
const skeletonCount = 6;
//! ---------------------------------------- Component (Skills)
export default function Skills({ teacher = undefined }) {
  //! ---------------------------------------- Return
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-semibold text-blue-700 mb-4">
        Skills and Specialties
      </h3>
      <ul className="flex gap-3">
        {teacher
          ? teacher?.skills?.map((skill, idx) => (
              <li
                key={idx}
                className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </li>
            ))
          : Array.from({ length: skeletonCount }).map((_, index) => (
              <li key={index} className="relative xl:min-h-5 w-1/12">
                <div className="skeleton" />
              </li>
            ))}
      </ul>
    </div>
  );
}
