//! ---------------------------------------- Import
//! ---------------------------------------- Component (TeacherBoxCourse)
export default function TeacherBoxCourse({ course = undefined }) {
  //! ---------------------------------------- Return
  return (
    <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-xl">
      <div className="relative overflow-hidden rounded-full border-2 border-blue-500 w-16 xl:min-h-16">
        {course ? (
          <img
            src={course?.teacher?.avatar}
            alt={course?.teacher?.name}
            className="object-fill"
          />
        ) : (
          <div className="skeleton" />
        )}
      </div>
      <div className="w-full flex flex-col gap-2">
        <div className="relative text-lg font-semibold w-1/4 xl:min-h-5">
          {course ? (
            <h4>{course?.teacher?.name}</h4>
          ) : (
            <div className="skeleton" />
          )}
        </div>
        <div className="relative text-sm text-gray-500 w-3/4 xl:min-h-5">
          {course ? (
            <p>{course?.teacher?.bio}</p>
          ) : (
            <div className="skeleton" />
          )}
        </div>
      </div>
    </div>
  );
}
