//! ---------------------------------------- Import
//! ---------------------------------------- Component (CourseBanner)
export default function CourseBanner({ course = undefined }) {
  //! ---------------------------------------- Return
  return (
    <div className="relative flex w-full h-144 overflow-hidden">
      {course ? (
        <img
          src={course?.image}
          alt={course?.title}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="skeleton" />
      )}
    </div>
  );
}
