//! ---------------------------------------- Import
//! ---------------------------------------- Component (HeadCourse)
export default function HeadCourse({ course = undefined }) {
  //! ---------------------------------------- Return
  return (
    <div className="relative xl:min-h-20">
      {course ? (
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl font-bold text-gray-800">{course?.title}</h2>
          <p className="text-gray-600 leading-relaxed">{course?.description}</p>
        </div>
      ) : (
        <div className="skeleton" />
      )}
    </div>
  );
}
